(async () => {
    const { exec } = require('child-process-promise')
    const fs = require('fs-extra')
    const { updateExpoVersion, updateChangeLog, build, downloadApk, generateDocs, versionDoc } = require('./lib')
    const pkg = require(`${process.cwd()}/package.json`)
    const MainPage = require('./lib/docs/components/MainPage')
    const changelogPath = `${process.cwd()}/CHANGELOG.md`

    let changelog = await fs.readFile(changelogPath, { encoding: 'utf-8' })

    try {
        await exec('npm test -- --coverage')
        await exec('npm run build')
        await exec('npm run docs')

        await versionDoc(pkg.version)
        await updateExpoVersion(pkg.version)
        const { androidApkUrl } = await build()

        changelog = await updateChangeLog(pkg.version, androidApkUrl, changelog, changelogPath)

        // await downloadApk(version, androidApkUrl)

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