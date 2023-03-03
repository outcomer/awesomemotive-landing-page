import fs from 'fs';
import gulp from "gulp";
import twing from "gulp-twing";
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from "twing";
import htmlbeautify from "gulp-html-beautify";
import gulpif from "gulp-if";
import yargs from "yargs";
import paths from "../paths.config.js";

const { argv } = yargs;
const developer = !!argv.developer;
const production = !developer;

/** Create HTML pages */
export default function templates() {
	const listHtml = fs.readdirSync(paths.src.listHtml)
		.filter(i => i.includes('.twig') && !i.includes('ui.twig'))
		.map(i => {
			const htmlContent = fs.readFileSync(`${paths.src.listHtml}/${i}`, 'utf8');
			const title = /{% set title = "([^"]+)"/.exec(htmlContent)[1] || '';
			const url = i.replace('.twig', '.html');

			return { url, title };
		});
	const envTwing = new TwingEnvironment(new TwingLoaderRelativeFilesystem(), {
		debug: true,
		cache: false,
		autoescape: false,
	});

	return gulp.src(paths.src.twig)
		.pipe(twing(envTwing))
		.pipe(gulpif(production, htmlbeautify({
			"indent_with_tabs": true,
		})))
		.pipe(gulp.dest(paths.dist.html));
}
