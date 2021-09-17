const http = require('http');

const stats = require('./pcRamUsage.js');


const host = 'http://localhost';
const port = 3000;

const app = http.createServer((req, res) => {
	let url = req.url;
	
	if (url === '/stats') {
		res.end(JSON.stringify(stats, null, 2));
	} else {
		res.end(`
			<h1>
				Hello Node-JS World!!!
			</h1>
			<h2>Monitorando os recursos do sistema em tempo real!</h2>
			<p>Acesse o com o link abaixo:<p>
			<p>
				<a href="/stats">/localhost:3000/stats/</a>
			<p>
		`);
	}
	
});


app.listen(port, () => console.log(`Server is running at ${host}:${port}`));



