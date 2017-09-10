(async () => {
    const exec = require('child-process-promise').exec
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

    try {
        cleanGitignore()
        updateExpoVersion()
        await exec('npm test -- --coverage')
        await exec('npm run build')
        await exec('npm run docs')
        await exec('git add -A')
        await exec('git commit --amend --no-edit')
    } catch (err) {
        console.error(err)
        process.exit(0)
    }
})()