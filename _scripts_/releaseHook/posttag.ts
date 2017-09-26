(async () => {
    const { exec } = require('child-process-promise')
    const gitBranch = require('git-branch')

    try {
        // await exec(`git push --follow-tags --no-verify origin ${gitBranch.sync()}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})()