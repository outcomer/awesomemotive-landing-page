import gulp from "gulp";
import rimraf from "gulp-rimraf";
import paths from "../paths.config.js";

/** Clean dist folder */
export default function clean() {
	return gulp.src(paths.clean, { read: false })
		.pipe(rimraf());
}
