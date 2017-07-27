const fs = require('fs')

/**
 * recursively parse a directory
 * @method walk
 * @param  {string} dir the directory you want to parse
 * @return {[string]} an array of all the file's path containing in the given directory and its children
 */
const walk = (dir) => {
    let results = []
    const list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        const stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}

module.exports = walk
