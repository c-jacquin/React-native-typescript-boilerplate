module.exports = async (version: string, androidApkUrl: string, changelog: string, changelogPath: string) => {
    const fs = require('fs-extra')

    await fs.writeFile(
        changelogPath,
        changelog.replace(`<a name="${version}">`, `<a name="${version}" href="${androidApkUrl}">Android Apk ${version}`)
    )
}
