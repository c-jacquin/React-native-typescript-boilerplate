const React = require('react')
const PropTypes = require('prop-types')
const { Helmet } = require('react-helmet')

const Navbar = require('./Navbar')
const Markdown = require('./Markdown')

interface MainPageProps {
    title: string
    changelog: string,
    pkg: any,
}

export const MainPage = (props: MainPageProps) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ props.title }</title>
            <link rel="stylesheet" href="./github.css"/>
            <link rel="stylesheet" href="./main.css"/>
        </Helmet>
        <Navbar repo={ props.pkg.repository.url.replace('.git', '') }/>
        <div className="wrap">
            <Markdown markdown={ props.changelog } />
        </div>
    </div>
)

module.exports = MainPage
