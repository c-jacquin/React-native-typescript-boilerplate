const fs = require('fs-extra')
const componentGenerator = require('./component')
const containerGenerator = require('./container')
const reduxModuleGenerator = require('./reduxModule')
const pageGenerator = require('./page')
const languageGenerator = require('./language')
const capitalizeFirstLetter = require('./utils/string')

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator)
    plop.setGenerator('container', containerGenerator)
    plop.setGenerator('redux module', reduxModuleGenerator)
    plop.setGenerator('page', pageGenerator)
    plop.setGenerator('language', languageGenerator)

    plop.addHelper('directory', async (comp) => {
        try {
            await fs.access(`src/containers/${comp}`)
            return `containers/${comp}`
        } catch (e) {
            return `components/${comp}`
        }
    })
    plop.addHelper('pascal', capitalizeFirstLetter)
    plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
    plop.addHelper('capitalize', (name) => name.toUpperCase())
}
