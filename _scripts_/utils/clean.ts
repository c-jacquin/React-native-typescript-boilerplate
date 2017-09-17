(async () => {
    const exec = require('child-process-promise').exec

    try {
        await exec('rimraf .temp -r')
        // await exec('rimraf docs -r')
        await exec('rimraf build -r')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})()