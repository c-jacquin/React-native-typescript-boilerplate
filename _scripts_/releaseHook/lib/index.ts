const jsonFormat = require('json-format')
const { readFile, writeFile } = require('../docs/helpers/fs')

const cleanGitignore = (): void => {
    const gitignorePath = `${process.cwd()}/.gitignore`
    const gitignioreContent = readFile(gitignorePath)

    writeFile(gitignorePath, gitignioreContent
        .replace(new RegExp('docs/', 'g'), '#docs/')
        .replace(new RegExp('build/', 'g'), '#build/')
    )
}

const updateExpoVersion = (): void => {
    const expoConfigPath = `${process.cwd()}/app.json`
    const pkg = require(`${process.cwd()}/package.json`)
    const expoConfigContent = JSON.parse(readFile(expoConfigPath))
    expoConfigContent.expo.version = pkg.version

    writeFile(
        expoConfigPath,
        jsonFormat(expoConfigContent, {
            type: 'space',
            size: 2,
        })
    )
}

const restoreGitignore = (): void => {
    const gitignorePath = `${process.cwd()}/.gitignore`
    const gitignioreContent = readFile(gitignorePath)

    writeFile(gitignorePath, gitignioreContent
        .replace(new RegExp('#docs/', 'g'), 'docs/')
        .replace(new RegExp('#build/', 'g'), 'build/')
    )
}

module.exports = {
    cleanGitignore,
    restoreGitignore,
    updateExpoVersion,
}
