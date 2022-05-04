module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{yml,css,ico,png,jpg,svg,webp,html,js,json}'
	],
	globIgnores: ['firebase.json'],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};