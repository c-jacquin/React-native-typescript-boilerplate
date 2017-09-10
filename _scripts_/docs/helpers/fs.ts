import * as fs from 'fs'
import * as path from 'path'
import * as rimraf from 'rimraf'

/**
 * create a new file with content
 */
export const writeFile = (dest: string, content: string): void => {
    fs.writeFileSync(dest, content)
}

/**
 * read the content of a file
 */
export const readFile = (src: string): string => {
    return fs.readFileSync(src, { encoding: 'utf-8' })
}

/**
 * delete a directory
 */
export const removeDir = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        rimraf(src, (err: Error) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

/**
 * copy synchrnously a single file
 */
export const copyFile = (src: string, target: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const rd = fs.createReadStream(src)
        const rejectCleanup = (err: Error) => {
            rd.destroy()
            wr.end()
            reject(err)
        }
        const wr = fs.createWriteStream(target)
        rd.on('error', rejectCleanup)
        wr.on('error', rejectCleanup)
        wr.on('finish', resolve)
        rd.pipe(wr)
    })
}