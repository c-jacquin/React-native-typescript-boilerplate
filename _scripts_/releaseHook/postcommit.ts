(async () => {
    const { exec } = require('child-process-promise')
    const fs = require('fs-extra')
    const { generateDoc } = require('@chazzz/simple-doc')
    const { updateExpoVersion, updateChangeLog, build, downloadApk, versionDoc } = require('./lib')
    const pkg = require(`${process.cwd()}/package.json`)
    const changelogPath = `${process.cwd()}/CHANGELOG.md`


    try {
        let changelog = await fs.readFile(changelogPath, { encoding: 'utf-8' })
        await exec('npm start test.cover')
        await exec('npm start build')
        await exec('npm start docs')

        await versionDoc(pkg.version)
        await updateExpoVersion(pkg.version)
        const { androidApkUrl } = await build()

        changelog = await updateChangeLog(pkg.version, androidApkUrl, changelog, changelogPath)

        // await downloadApk(version, androidApkUrl)

        await generateDoc({
            pkg,
            markdown: changelog,
        })
        await exec('git add -A')
        await exec('git commit --amend --no-edit')
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        process.exit(0)
    }
})()