import gulp from "gulp";
import webpack from "webpack-stream";
import webpackConfig from "../webpack.config.js";
import paths from "../paths.config.js";


/** Compile javascript files */
export default function scripts() {
	return webpack(webpackConfig)
		.pipe(gulp.dest(paths.dist.js));
}
