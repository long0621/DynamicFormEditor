module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: publicPath()
};


function publicPath() {
	switch (process.env.NODE_ENV) {
		case 'production':
			return './';
		default:
			return '/';
	}
}