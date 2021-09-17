const http = require('http');
const os = require('os');


//console.log(os);

setInterval(() => {
	const { arch, platform, totalmem, freemem } = os;

	const tRAM = totalmem() / 1024 / 1024;
	const fRAM = freemem() / 1024 / 1024;
	const usage = (fRAM / tRAM) * 100;

	const status = {
		OS: platform(),
		Arch: arch(),
		TotalRAM: `${parseInt(tRAM)} MB`,
		FreeRAM: `${parseInt(fRAM)} MB`,
		usage: `${usage.toFixed(2)} %`
	};

	console.clear();
	console.table(status);
}, 1000);





