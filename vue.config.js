module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave:false,
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