const http = require('http');


//console.log(http);
const host = 'http://localhost';
const port = 3000;

const app = http.createServer((req, res) => {
	//res.write('<h1>working</h1>');
	res.end('<h1>Working even better!!!</h1>');
});




app.listen(port, () => console.log(`Server is running at ${host}:${port}`));














