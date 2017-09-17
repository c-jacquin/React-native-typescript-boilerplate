module.exports = {
    build: require('./expo/build'),
    updateExpoVersion: require('./expo/version'),
    updateChangeLog: require('./changelog'),
    downloadApk: require('./expo/downloadApk'),
    generateDocs: require('./docs'),
    versionDoc: require('./utils/versionDoc'),
}