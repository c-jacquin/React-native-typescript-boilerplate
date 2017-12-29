/**
* pageExists
*
* Check whether the given component exist in the page directory
*/

const fs = require('fs')
const pageComponents = fs.readdirSync('src/pages')

function pageExists(comp) {
    return pageComponents.indexOf(comp) >= 0
}

module.exports = pageExists
