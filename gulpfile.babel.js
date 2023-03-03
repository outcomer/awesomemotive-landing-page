import gulp from "gulp";
import del from "del";
import bserver from "browser-sync";
import paths from "./configs/paths.config.js";
import clean from "./configs/tasks/clean.js";
import templates from "./configs/tasks/templates.js";
import styles from "./configs/tasks/styles.js";
import scripts from "./configs/tasks/scripts.js";
import fonts from "./configs/tasks/fonts.js";
import images from "./configs/tasks/images.js";

let nameProject = __dirname.replace('/dist', '')

if (nameProject.includes('/')) {
    nameProject = nameProject.split("/").pop()
} else {
    nameProject = nameProject.split("\\").pop()
}

global.$ = {
    browserSync: bserver.create()
};

// Watch
function watch() {
    gulp.watch(paths.watch.scss, styles);
    gulp.watch(paths.watch.twig, templates);
    gulp.watch(paths.watch.js, scripts);
    gulp.watch(paths.watch.fonts, fonts);
    gulp.watch(paths.watch.img, images);
}

// Watch dist folder and reload browser
function server() {
    $.browserSync.init({
        injectChanges: true,
        server: {
            baseDir: paths.dirs.dist,
            index: "index.html"
        }
    });
    $.browserSync.watch([paths.dist.html+'/*.*', paths.dist.js+'/*.*', paths.dist.fonts+'/*.*', paths.dist.img+'/*.*'], $.browserSync.reload);
}

gulp.task('delview', function () {
    return del('dist/views');
});
gulp.task('clean_prod', function () {
    return del(nameProject);
});
/** Tasks */
export {templates, styles, scripts, fonts, images, clean};

export const build = gulp.series(
    clean,
    'clean_prod',
    gulp.parallel(fonts, images, styles, scripts, templates),
    'delview',
)
export const upload = gulp.series(
    clean,
    'clean_prod',
    gulp.parallel(fonts, images, styles, scripts, templates),
    'delview',
)

export default gulp.series(
    clean,
    'clean_prod',
    gulp.parallel(fonts, images, styles, scripts, templates),
    gulp.parallel(watch, server)
)
