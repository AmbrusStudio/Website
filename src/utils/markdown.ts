import MarkdownIt from 'markdown-it'

const Markdown = new MarkdownIt()

export function renderMarkdown(src: string): string {
  return Markdown.render(src)
}
