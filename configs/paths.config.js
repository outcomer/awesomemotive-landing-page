import path from "path";

const dirRoot = process.cwd();
const dirDist = 'dist';
const dirAssets = 'assets';
const dirSrc = 'src';
const dirStatic = 'static';

export default {
	dirs: {
		root: dirRoot,
		dist: dirDist,
		assets: dirAssets,
		srs: dirSrc,
		static: dirStatic,
	},
	root: path.join(dirRoot, dirDist),
	clean: path.join(dirRoot, dirDist, '*'),
	dist: {
		static: path.join(dirRoot, dirDist),
		html: path.join(dirRoot, dirDist),
		js: path.join(dirRoot, dirDist, dirAssets, 'js'),
		css: path.join(dirRoot, dirDist, dirAssets, 'css'),
		img: path.join(dirRoot, dirDist, dirAssets, 'img'),
		fonts: path.join(dirRoot, dirDist, dirAssets, 'fonts')
	},
	src: {
		data: path.join(dirRoot, 'data'),
		static: path.join(dirRoot, dirSrc, dirStatic, '**/*'),
		twig: path.join(dirRoot, dirSrc, '**', '*.twig'),
		listHtml: path.join(dirRoot, dirSrc, ''),
		script: path.join(dirRoot, dirSrc, dirAssets, 'js', 'index.js'),
		style: path.join(dirRoot, dirSrc, dirAssets, 'scss', 'index.scss'),
		libs: path.join(dirRoot, dirSrc, dirAssets, 'libs/scss', 'libs.scss'),
		img: path.join(dirRoot, dirSrc, dirAssets, 'img', '**/*.*'),
		fonts: path.join(dirRoot, dirSrc, dirAssets, 'fonts', '**/*.*')
	},
	watch: {
		bs: path.join(dirRoot, dirDist, '**/*.*'),
		static: `./${dirStatic}/'**/*.*`,
		twig: `./${dirSrc}/**/**/*.twig`,
		js: `./${dirSrc}/${dirAssets}/js/**/*.js`,
		scss: `./${dirSrc}/${dirAssets}/scss/*.scss`,
		libs: `./${dirSrc}/${dirAssets}/libs/**/*.scss`,
		img: `./${dirSrc}/${dirAssets}/img/**/*.*`,
		fonts: `./${dirSrc}/${dirAssets}/fonts/**/*.*`
	}
};
