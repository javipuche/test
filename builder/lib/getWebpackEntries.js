import glob from 'glob'
import { paths, sources } from '../config'

const getPath = (entries, path, outpath) => {
    let outputPath = {}

    entries.forEach((item) => {
        outputPath[`${outpath}/${item.split(`${path}/`)[1].split('.')[0]}`] = item
    })

    return outputPath
}

const entries = () => {
    const sass = getPath(glob.sync(`${paths.src.sassApp}/**/[^_]*.scss`), paths.src.sassApp, sources.css)
    const js = getPath(glob.sync(`${paths.src.jsApp}/**/[^_]*.js`), paths.src.jsApp, sources.js)

    return Object.assign(sass, js)
}

export default entries
