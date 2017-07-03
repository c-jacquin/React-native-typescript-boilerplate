const fs = require('fs')
const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')
const reduxModuleGenerator = require('./reduxModule/index.js')

const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator)
    plop.setGenerator('container', containerGenerator)
    plop.setGenerator('redux module', reduxModuleGenerator)

    plop.addHelper('directory', (comp) => {
        try {
            fs.accessSync(`src/containers/${comp}`, fs.F_OK)
            return `containers/${comp}`
        } catch (e) {
            return `components/${comp}`
        }
    })
    plop.addHelper('docParam', (comp) => `{${capitalizeFirstLetter(comp)}}`)
    plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
    plop.addHelper('capitalize', (comp) => comp.toUpperCase())
}
