module.exports = (version: string): void => {
    const jsonFormat = require('json-format')
    const fs = require('fs')
    const expoConfigPath = `${process.cwd()}/app.json`
    const expoConfigContent = JSON.parse(fs.readFileSync(expoConfigPath, { encoding: 'utf-8' }))

    expoConfigContent.expo.version = version

    fs.writeFileSync(
        expoConfigPath,
        jsonFormat(expoConfigContent, {
            type: 'space',
            size: 2,
        })
    )
}
