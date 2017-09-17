const React = require('react')
const ReactDomServer = require('react-dom/server')
const { Helmet } = require('react-helmet')

/**
 * render an html page from a react component for the last version of the app
 */
module.exports = (Component: any, props: any): string => {
    const reactApp = ReactDomServer.renderToString(<Component {...props}/>)
    const helmet = Helmet.renderStatic()

    return `
        <!doctype html>
        <html>
            <head>
                ${ helmet.title.toString() }
                ${ helmet.meta.toString() }
                ${ helmet.link.toString() }
                ${ helmet.script.toString() }
            </head>
            <body>
                ${ reactApp }
            </body>
        </html>
    `
}
