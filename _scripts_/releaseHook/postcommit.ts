(async () => {
    const { exec } = require('child-process-promise')
    const jsonFormat = require('json-format')
    const { updateExpoVersion, updateChangeLog, build, downloadApk } = require('./lib')
    const { version } = require(`${process.cwd()}/package.json`)

    try {
        updateExpoVersion(version)

        const { androidApkUrl } = await build()
        updateChangeLog(version, androidApkUrl)
        // await downloadApk(version, androidApkUrl)

        await exec('npm run docs')
        await exec('git add -A')
        await exec('git commit --amend --no-edit')
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        process.exit(0)
    }
})()