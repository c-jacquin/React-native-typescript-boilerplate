(async () => {
    const exec = require('child-process-promise').exec
    const { readFile, writeFile } = require('../docs/helpers/fs')

    const cleanGitignore = (): void => {
        const gitignorePath = `${process.cwd()}/.gitignore`
        const gitignioreContent = readFile(gitignorePath)

        writeFile(gitignorePath, gitignioreContent
            .replace(new RegExp('docs/', 'g'), '#docs/')
            .replace(new RegExp('build/', 'g'), '#build/')
        )
    }

    try {
        cleanGitignore()
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