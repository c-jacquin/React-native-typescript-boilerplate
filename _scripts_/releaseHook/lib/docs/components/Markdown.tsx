const React = require('react')
const marked = require('marked')

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
})

interface MarkdownProps {
    githubStyle: boolean
    markdown: string
}

export const Markdown = (props: MarkdownProps) => (
    <div
        className={ props.githubStyle ? 'markdown-github' : '' }
        dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
    />
)

module.exports = Markdown