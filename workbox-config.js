module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{ico,png,jpg,svg,webp,html}',
		'js/*',
		'css/*',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/animate.css/animate.min.css',
		'manifest.json'
	],
	globIgnores: [],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};