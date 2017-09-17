interface Build {
    androidApkUrl: string
}

const buildAndroid = () => {
    const { exec } = require('child-process-promise')

    return exec('exp build:android')
}

const getAndroidApkUrl = (log: string): string | undefined => {
    return log.split(' ').find((part: string) => part.endsWith('apk\n\n'))
}

const checkIfBuildsAreReady = (): Promise<Build> => {
    const { exec } = require('child-process-promise')

    return new Promise(async (resolve, reject) => {
        const checkAndroid = async () => {
            const { stdout } = await exec('exp build:status')
            const androidApkUrl = getAndroidApkUrl(stdout)
            if (androidApkUrl) {
                resolve({ androidApkUrl: androidApkUrl.trim() })
            }
        }

        await checkAndroid()

        const interval = setInterval(checkAndroid, 1000 * 60 * 5)

        const timeout = setTimeout(() => {
            reject(new Error('timeout !!!'))
            clearTimeout(timeout)
            clearInterval(interval)
        }, 1000 * 60 * 5 * 12)
    })
}

const build = async () => {
    const { exec } = require('child-process-promise')

    try {
        const { stdout } = await exec('exp build:status')
        const androidApkUrl = getAndroidApkUrl(stdout)
        if (androidApkUrl) {
            return Promise.resolve({ androidApkUrl })
        } else {
            await buildAndroid()
        }
    } catch (err) {
        console.error(err)
    }
    return await checkIfBuildsAreReady()
}

module.exports = build
