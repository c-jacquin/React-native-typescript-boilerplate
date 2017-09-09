const walk = require('./walk')

/**
 * @typedef {object} Nav
 * @property {string} path the path of the navigator
 * @property {string} name the name of the navigator
 */

/**
 * Return an array containing all the information relative to the app's navigators
 * @method getNavigatorsList
 * @param  {string} [dir=`${process.cwd()}/src/pages`] the root directory of navigators
 * @return {[Nav]} an array of object representing yout navigators
 */
const getNavigatorsList = (dir = `${process.cwd()}/src/pages`) => {
    return [
        {
            name: 'Main',
            path: '../src/pages/index.ts',
        },
        ...walk(dir)
            .filter((path) => path.includes('nav'))
            .map((path) => {
                const splitedPath = path.split('/')

                return {
                    name: splitedPath[splitedPath.length - 2],
                    path: `../src${path.split('src')[1]}`,
                }
            })
    ]
}

module.exports = getNavigatorsList
