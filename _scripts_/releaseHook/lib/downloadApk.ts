const downloadApk = async (version: string, apkUrl: string): Promise<string> => {
    const fetch = require('node-fetch')
    const fs = require('fs')

    return new Promise<string>(async (resolve, reject) => {
        const res = await fetch(apkUrl)
        const apkPath = `${process.cwd()}/docs/builds/${version}.apk`
        const dest = fs.createWriteStream(apkPath)
        res.body.pipe(dest)
        res.body.on('end', () => resolve(apkPath))
        res.body.on('error', reject)
    })
}

module.exports = downloadApk
