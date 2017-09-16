(async () => {
    const exec = require('child-process-promise').exec

    try {
        await exec('rimraf docs/doc -r')
        await exec('rimraf docs/lcov-report -r')
        await exec('rimraf docs/test-report -r')
        await exec('rimraf docs/github.css')
        await exec('rimraf docs/index.html')
        await exec('rimraf docs/main.css')
        await exec('rimraf build -r')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})()