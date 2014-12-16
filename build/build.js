var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
    files: '../release/**', // use the glob format
	buildDir: './out',
    platforms: ['win64'],
	winIco: './icon.ico',
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});