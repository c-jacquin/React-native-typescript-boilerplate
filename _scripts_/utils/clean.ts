(async () => {
    const { exec } = require('child-process-promise')

    try {
        await exec('rimraf .temp -r')
        await exec('rimraf docs/test-report -r')
        await exec('rimraf docs/lcov-report -r')
        await exec('rimraf build -r')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})()