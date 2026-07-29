import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export type DocMetaData = {
  id: string
  title: string
  date: string
  description: string
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

export async function getDocData(id: string): Promise<DocData | null> {
  const fullPath = path.join(docsDirectory, `${id}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
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
    // Basic slugification: remove tags, lowercase, hyphenate
    const rawText = text.replace(/<[^>]+>/g, '').trim();
    const slugId = rawText.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
    
    headings.push({ text: rawText, level, id: slugId });
    return `<h${level} id="${slugId}">${text}</h${level}>`;
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    headings,
    ...(matterResult.data as { title: string; date: string; description: string }),
  }
}
