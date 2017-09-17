module.exports = async (version: string) => {
    const jsonFormat = require('json-format')
    const fs = require('fs-extra')
    const expoConfigPath = `${process.cwd()}/app.json`
    const expoConfigContent = JSON.parse(fs.readFileSync(expoConfigPath, { encoding: 'utf-8' }))

    expoConfigContent.expo.version = version

    await fs.writeJson(
        expoConfigPath,
        expoConfigContent,
        {
            spaces: 2,
        }
    )
}
