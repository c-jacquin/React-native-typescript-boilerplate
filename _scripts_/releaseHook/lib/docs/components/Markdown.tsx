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

export const Markdown: React.StatelessComponent<any> = ({ githubStyle, markdown }) => (
    <div
        className={ githubStyle ? 'markdown-github' : '' }
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
)

module.exports = Markdown