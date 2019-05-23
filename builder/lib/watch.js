import gulp from 'gulp'
import reloadBrowser from './reloadBrowser'
import fonts from '../tasks/fonts'
import images from '../tasks/images'
import staticFolder from '../tasks/staticFolder'
import { paths, isWatching } from '../config'

const watch = () => {
    if (isWatching) {
        gulp.watch(`${paths.src.fonts}/**/*.{eot,ttf,svg,woff,woff2}`).on('all', gulp.series(fonts, reloadBrowser))
        gulp.watch(`${paths.src.images}/**/*.{gif,png,jpg,jpeg,svg}`).on('all', gulp.series(images, reloadBrowser))
        gulp.watch(`${paths.src.static}/**/*`).on('all', gulp.series(staticFolder, reloadBrowser))
    }
}

export default watch
