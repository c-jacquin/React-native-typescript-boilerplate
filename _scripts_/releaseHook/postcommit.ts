(async () => {
    const exec = require('child-process-promise').exec
    const jsonFormat = require('json-format')
    const { cleanGitignore, updateExpoVersion } = require('./lib')

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