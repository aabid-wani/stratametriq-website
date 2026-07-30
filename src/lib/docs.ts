import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export type DocMetaData = {
  id: string
  title: string
  date?: string
  description?: string
  sidebar_position?: number
}

export type HeadingData = {
  text: string
  level: number
  id: string
}

export type DocData = DocMetaData & {
  contentHtml: string
  headings: HeadingData[]
}

async function parseMarkdownFile(fullPath: string, id: string): Promise<DocData> {
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  
  let contentHtml = processedContent.toString()

  const headings: HeadingData[] = []
  
  // Replace HTML headings to inject IDs and collect them for the sidebar
  contentHtml = contentHtml.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, levelStr, text) => {
    const level = parseInt(levelStr, 10);
    const rawText = text.replace(/<[^>]+>/g, '').trim();
    const slugId = rawText.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
    
    headings.push({ text: rawText, level, id: slugId });
    return `<h${level} id="${slugId}">${text}</h${level}>`;
  });

  return {
    id,
    contentHtml,
    headings,
    ...(matterResult.data as { title: string; date?: string; description?: string; sidebar_position?: number }),
  }
}

export async function getDocData(id: string): Promise<DocData | null> {
  const fullPath = path.join(docsDirectory, `${id}.md`)
  if (!fs.existsSync(fullPath)) return null;
  return parseMarkdownFile(fullPath, id);
}

export async function getMultiDocData(id: string): Promise<DocData[] | null> {
  const dirPath = path.join(docsDirectory, id)
  
  // If it's a directory, parse all markdown files inside it
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const fileNames = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    
    const docs = await Promise.all(
      fileNames.map(fileName => {
        const fullPath = path.join(dirPath, fileName)
        const docId = fileName.replace(/\.mdx?$/, '')
        return parseMarkdownFile(fullPath, docId)
      })
    )
    
    // Sort by sidebar_position if available
    return docs.sort((a, b) => {
      const posA = a.sidebar_position ?? 999;
      const posB = b.sidebar_position ?? 999;
      return posA - posB;
    })
  }

  // Fallback to single file mode
  const singleDoc = await getDocData(id)
  return singleDoc ? [singleDoc] : null
}
