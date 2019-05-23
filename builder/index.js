import gulp from 'gulp'
import cleanDist from './tasks/cleanDist'
import fonts from './tasks/fonts'
import images from './tasks/images'
import staticFolder from './tasks/staticFolder'
import webpackAssets from './tasks/webpackAssets'
import cleanEmptyFolders from './tasks/cleanEmptyFolders'
import cleanTmp from './tasks/cleanTmp'

gulp.task('commons', gulp.series(cleanDist, gulp.parallel(fonts, images, staticFolder), webpackAssets, cleanEmptyFolders, cleanTmp))
gulp.task('build', gulp.series('commons'))
gulp.task('default', gulp.series('commons'))
