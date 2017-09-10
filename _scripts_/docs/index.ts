import { prettyPrint } from 'html'
import { writeFile, readFile, copyFile } from './helpers/fs'
import { renderPage } from './helpers/render'
import { docDir, styleDir } from './helpers/paths'
import { MainPage } from './components/MainPage'

const pkg = JSON.parse(readFile(`${process.cwd()}/package.json`))
const changelog = readFile(`${process.cwd()}/CHANGELOG.md`)

/**
 * create the main index.html file
 * @method createMainHtmlIndex
 * @return {void}
 */
const createMainHtmlIndex = () => {
    const html = renderPage(MainPage, {
        title: `${pkg.name} Documentation`,
        pkg,
        changelog,
    })

    writeFile(`${docDir}/index.html`, prettyPrint(html))
}

(async () => {
    try {
        createMainHtmlIndex()
        copyFile(`${styleDir}/github.css`, `${docDir}/github.css`)
        copyFile(`${styleDir}/main.css`, `${docDir}/main.css`)
        console.log('documentation updated !!!')
    } catch (err) {
        console.error(err)
    }
})()
