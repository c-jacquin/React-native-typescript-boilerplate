import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Navbar } from './Navbar'
import { Markdown } from './Markdown'

interface MainPageProps {
    title: string
    changelog: string,
    pkg: any,
}

export const MainPage: React.StatelessComponent<MainPageProps> = ({ title, changelog, pkg }) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ title }</title>
            <link rel="stylesheet" href="./github.css"/>
            <link rel="stylesheet" href="./main.css"/>
        </Helmet>
        <Navbar repo={ pkg.repository.url.replace('.git', '') }/>
        <div className="wrap">
            <Markdown markdown={ changelog } />
        </div>
    </div>
)
