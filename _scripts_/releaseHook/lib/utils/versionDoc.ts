module.exports = async (version: string) => {
    const fs = require('fs-extra')
    const versionDir = `${process.cwd()}/docs/${version}`
    try {
        await fs.mkdir(versionDir)
    } catch (err) {
        console.error(err)
    }
    await fs.move(`${process.cwd()}/docs/doc`, `${versionDir}/doc`)
    await fs.move(`${process.cwd()}/docs/lcov-report`, `${versionDir}/lcov-report`)
    await fs.move(`${process.cwd()}/docs/test-report`, `${versionDir}/test-report`)
}