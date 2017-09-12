interface Build {
    androidApkUrl: string
}

(async () => {
    const exec = require('child-process-promise').exec
    const { checkIfBuildsAreReady } = require('./lib')

    await exec('exp build:android')
    return await checkIfBuildsAreReady()
})()