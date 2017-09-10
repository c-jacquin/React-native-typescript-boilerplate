(async () => {
    const exec = require('child-process-promise').exec
    const { readFile, writeFile } = require('../docs/helpers/fs')

    const restoreGitignore = (): void => {
        const gitignorePath = `${process.cwd()}/.gitignore`
        const gitignioreContent = readFile(gitignorePath)

        writeFile(gitignorePath, gitignioreContent
            .replace(new RegExp('#docs/', 'g'), 'docs/')
            .replace(new RegExp('#build/', 'g'), 'build/')
        )
    }

    try {
        restoreGitignore()
        await exec('git push --follow-tags --no-verify origin master')
        await exec('npm run clean')
        await exec('npm run add')
        await exec('git commit -m "chore(build): remove documentation and build" --no-verify')
        await exec('git push --no-verify origin master')
    } catch (err) {
        console.error(err)
        process.exit(0)
    }
})()