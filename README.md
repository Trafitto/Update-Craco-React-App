# Update Craco React App

How I've touch the madness

## Story 📖 

One day at work I found myself having to update the dependencies of a project, several people worked on this project, and I'm more of a backend guy so I limited myself to updating the dependencies making sure that everything worked without changing the tools used to develop

## Things I have updated ✨

- FROM `@craco/craco: ^5.6.4` TO `@craco/craco: 7.0.0-alpha.0`
- FROM `firebase: ^8.3.0` TO `firebase: ^9.6.4`
- FROM `axios: ^0.21.1` TO `axios: ^0.25.0`
- FROM `react: ^16.13.1` TO `react: ^17.0.2`
- FROM `react-dom: ^16.13.1` TO `react-dom: ^17.0.2`
- FROM `redux": ^4.0.5` TO `redux: ^4.1.2`
- FROM `swr: ^0.2.3` TO `swr: ^1.2.0`
- FROM `@reduxjs/toolkit: ^1.5.0` TO `@reduxjs/toolkit: ^1.7.1`
- FROM `@types/node: ^14.0.14` TO `@types/node: ^16.11.21`
- FROM `@types/react: ^16.9.41` TO `@types/react: ^17.0.38`
- FROM `@types/react-dom: ^16.9.8` TO `@types/react-dom: ^17.0.11`
- FROM `@types/react-redux: ^7.1.16` TO `@types/react-redux: ^7.1.22`
- FROM `@typescript-eslint/eslint-plugin: ^2.28.0` TO `@typescript-eslint/eslint-plugin: ^5.10.1`
- FROM `@typescript-eslint/parser: ^2.28.0` TO `@typescript-eslint/parser: ^5.10.1`
- FROM `craco-alias: ^2.1.1` TO `craco-alias: ^3.0.1`
- FROM `eslint: ^6.8.0` TO `eslint: ^8.7.0`
- FROM `eslint-config-prettier: ^6.10.1` TO `eslint-config-prettier: ^8.3.0`
- FROM `eslint-plugin-prettier: ^3.1.4` TO `eslint-plugin-prettier: ^4.0.0`
- FROM `eslint-plugin-react: ^7.20.0` TO `eslint-plugin-react: ^7.28.0`
- FROM `react-scripts: ^3.4.4` TO `react-scripts: 5.0.0`
- FROM `typescript: ^3.9.5` TO `typescript: ^4.5.5`


## Things I've added

These packages were added because react-scripts 5.0 uses Webpack 5 which no longer supports polyfill.

- `process: 0.11.10`
- `stream-browserify: ^3.0.0`
- `stream-http: ^3.2.0`
- `timers-browserify: ^2.0.12`
- `url: ^0.11.0`
- `https-browserify: ^1.0.0`
- `buffer: ^6.0.3`
- `crypto-browserify: ^3.12.0`

## Add Webpack config with Polyfill to your craco.config.js

Webpack 5 doesn't support polyfill so you have to add dependencies yourself.

If you use Craco you can configure webpack in this way (in the repo there is the whole file) there is a redundancy in 'alias' and 'fallback.resolve' but I left it because this is how it works

```
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
```

## Firebase

Firebase change a lot from 8 to 9

You can temporarily use the functions of Firebase 8 by changing the imports (compatibility will be removed in future versions of Firebase, keep this in mind)

From `import firebase from 'firebase/app'` TO `import firebase from 'firebase/compat/app'`

## Eslint

If you have 

```
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
```
 somewhere in your code you will need to replace it with

 ```
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
 ```


### NOTE

I don't remember if there have been any other changes, in case I will update the repo

Feel free to ask in case any steps are not clear

> Apes Together Strong