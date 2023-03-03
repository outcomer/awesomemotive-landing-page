import gulp from "gulp";
import paths from "../paths.config.js";


/** Move fonts */
export default function fonts() {
	return gulp.src(paths.src.fonts)
		.pipe(gulp.dest(paths.dist.fonts));
}
