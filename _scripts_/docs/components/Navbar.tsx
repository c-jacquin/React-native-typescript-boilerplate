import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

interface NavbarProps {
    repo: string
}

export const Navbar: React.StatelessComponent<NavbarProps> = ({ repo }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Helmet>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
            <script src="https://use.fontawesome.com/3d13965eab.js" />
        </Helmet>
        <a className="navbar-brand" href="#">Documentation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="./doc">
                        TypeDoc
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./test-report">
                        Test Report
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./lcov-report">
                        Code Coverage
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href={ repo }>
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={ `${repo}/issues` }>
                        <i className="fa fa-exclamation-circle" aria-hidden="true" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={ `${repo}/projects` }>
                        <i className="fa fa-trello" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
    </nav>
)
