module.exports = async (Page: any, pkg: any, changelog: any) => {
    const fs = require('fs-extra')
    const { prettyPrint } = require('html')
    const renderPage = require('./render')

    const html = renderPage(Page, {
        title: `${pkg.name} Documentation`,
        pkg,
        changelog,
    })
    const docDir = `${process.cwd()}/docs`
    const styleDir = `${process.cwd()}/_scripts_/releaseHook/lib/docs/style`

    await fs.writeFile(`${docDir}/index.html`, prettyPrint(html))
    await fs.copy(`${styleDir}/github.css`, `${docDir}/github.css`)
    await fs.copy(`${styleDir}/main.css`, `${docDir}/main.css`)
}