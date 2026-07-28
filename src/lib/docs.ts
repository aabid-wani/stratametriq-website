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

export type DocData = DocMetaData & {
  contentHtml: string
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
  
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; description: string }),
  }
}
