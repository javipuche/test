import path from 'path'
import gulp from 'gulp'
import GulpMem from 'gulp-mem'

/* -----------------------------------------------------------------------------
 * Process flags
 */

const isProduction = process.argv.indexOf('--production') >= 0
const isServerUp = process.argv.indexOf('--server') >= 0
const isWatching = process.argv.indexOf('--watch') >= 0

/* -----------------------------------------------------------------------------
 * Sources
 */

const sources = {
    dist: '../dist',
    src: '../src',
    assets: 'assets',
    sass: 'assets/sass',
    sassApp: 'assets/sass/app',
    css: 'assets/css',
    js: 'assets/js',
    jsApp: 'assets/js/app',
    fonts: 'assets/fonts',
    images: 'assets/images',
    static: 'static',
    data: 'data'
}

/* -----------------------------------------------------------------------------
 * Paths
 */

const paths = {
    src: {
        root: path.join(__dirname, `/${sources.src}`),
        assets: path.join(__dirname, `/${sources.src}/${sources.assets}`),
        sass: path.join(__dirname, `/${sources.src}/${sources.sass}`),
        sassApp: path.join(__dirname, `/${sources.src}/${sources.sassApp}`),
        jsApp: path.join(__dirname, `/${sources.src}/${sources.jsApp}`),
        fonts: path.join(__dirname, `/${sources.src}/${sources.fonts}`),
        images: path.join(__dirname, `/${sources.src}/${sources.images}`),
        static: path.join(__dirname, `/${sources.src}/${sources.static}`),
        data: path.join(__dirname, `/${sources.src}/${sources.data}`)
    },
    dist: {
        root: path.join(__dirname, `/${sources.dist}`),
        assets: path.join(__dirname, `/${sources.dist}/${sources.assets}`),
        css: path.join(__dirname, `/${sources.dist}/${sources.css}`),
        js: path.join(__dirname, `/${sources.dist}/${sources.js}`),
        fonts: path.join(__dirname, `/${sources.dist}/${sources.fonts}`),
        images: path.join(__dirname, `/${sources.dist}/${sources.images}`),
        static: path.join(__dirname, `/${sources.dist}/${sources.static}`)
    },
    node_modules: path.join(__dirname, '../node_modules')
}

/* -----------------------------------------------------------------------------
 * Public paths
 */

const publicPath = {
    root: '/',
    images: '../images', // For urls in css files. Path: assets/css
    fonts: '../fonts' // For urls in css files. Path: assets/css
}

/* -----------------------------------------------------------------------------
 * Alias
 */

const alias = {
    node_modules: paths.node_modules,
    assets: paths.src.assets
}

/* -----------------------------------------------------------------------------
 * Gulp Memory
 */

let gulpMem

if (isServerUp) {
    gulpMem = new GulpMem()
    gulpMem.serveBasePath = paths.dist.root
    gulpMem.enableLog = false
} else {
    gulpMem = gulp
}

/* -----------------------------------------------------------------------------
 * Export
 */

export { isProduction, isServerUp, isWatching, sources, paths, publicPath, alias, gulpMem }
