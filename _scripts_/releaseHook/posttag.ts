(async () => {
    const exec = require('child-process-promise').exec
    const { restoreGitignore } = require('./lib')

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