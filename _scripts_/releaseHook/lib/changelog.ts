module.exports = (version: string, androidApkUrl: string) => {
    const fs = require('fs')
    const changelogPath = `${process.cwd()}/CHANGELOG.md`

    const changelog = fs.readFileSync(changelogPath, { encoding: 'utf-8' })
        .replace(`<a name="${version}">`, `<a name="${version}" href="${androidApkUrl}">Android Apk ${version}`)

    fs.writeFileSync(changelogPath, changelog)
}
