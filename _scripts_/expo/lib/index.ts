const getAndroidApkUrl = (log: string): string => {
    return log.split(' ').filter((part: string) => part.endsWith('apk\n\n'))[0]
}

const checkIfBuildsAreReady = (): Promise<Build> => {
    const exec = require('child-process-promise').exec

    return new Promise(async (resolve, reject) => {
        const checkAndroid = async () => {
            const { stdout } = await exec('exp build:status')
            const androidApkUrl = getAndroidApkUrl(stdout)
            if (androidApkUrl) {
                resolve({ androidApkUrl })
            }
            if (interval) {
                clearInterval(interval)
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

module.exports = {
    getAndroidApkUrl,
    checkIfBuildsAreReady,
}