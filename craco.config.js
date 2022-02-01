const webpack = require('webpack')

module.exports = {
	plugins: [
		{
			plugin: require('craco-alias'),
			options: {
				source: 'tsconfig',
				tsConfigPath: './tsconfig.json',
			},
		},
		{
			plugin: require('@fullcalendar/core'),
		},
	],
	jest: {
        configure: {
            globals: {
                "CONFIG": true
            }
        }
    },
	webpack:{
		plugins: [
			new webpack.ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
			new webpack.ProvidePlugin({
				process: ['process'],
			}),
		],
		alias: {
			crypto: require.resolve('crypto-browserify'),
			http: require.resolve('stream-http'),
			https: require.resolve('https-browserify'),
			timers: require.resolve('timers-browserify'),
			Buffer: require.resolve('buffer'),
			process: require.resolve('process'),
			url: require.resolve('url'),
			stream: require.resolve('stream-browserify'),
		},
        resolve: {
			fallback: {
			  crypto: require.resolve('crypto-browserify'),
			  http: require.resolve('stream-http'),
			  https: require.resolve('https-browserify'),
			  timers: require.resolve('timers-browserify'),
			  buffer: require.resolve('buffer'),
			  process: require.resolve('process'),
			  url: require.resolve('url'),
			  stream: require.resolve('stream-browserify'),
			} 
		  }
    }
}
