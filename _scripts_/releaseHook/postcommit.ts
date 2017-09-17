(async () => {
    const { exec } = require('child-process-promise')
    const fs = require('fs-extra')
    const { updateExpoVersion, updateChangeLog, build, downloadApk, generateDocs } = require('./lib')
    const pkg = require(`${process.cwd()}/package.json`)
    const MainPage = require('./lib/docs/components/MainPage')
    const changelogPath = `${process.cwd()}/CHANGELOG.md`

    const changelog = await fs.readFile(changelogPath, { encoding: 'utf-8' })

    try {
        await exec('npm test -- --coverage')
        await exec('npm run build')

        await updateExpoVersion(pkg.version)
        const { androidApkUrl } = await build()
        await updateChangeLog(pkg.version, androidApkUrl, changelog, changelogPath)

        // await downloadApk(version, androidApkUrl)

        await exec('npm run docs')
        await generateDocs(MainPage, pkg, changelog)
        await exec('git add -A')
        await exec('git commit --amend --no-edit')
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        process.exit(0)
    }
})()