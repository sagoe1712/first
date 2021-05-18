const http = require('http');

const rqListener = (req, res) => {
// console.log(req);
// console.log(req.url,req.method,req.headers);
// process.exit();

const url = req.url;
if(url === '/'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Node JS response</title></head>');
res.write('<body>');
res.write('Welcome to Node JS class');
res.write('</body>');
res.write('</html>');
return res.end();
}
if(url === '/login'){
    res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Node Response Form</title></head>');
res.write('<body>');
res.write('username <input type="text"/>');
res.write('<br/>');
res.write('Password <input type="password"/>');
res.write('<br/>');
res.write('<button>Login</button>');
res.write('</body>');
res.write('</html>');
return res.end();
}
}

const server = http.createServer(rqListener);

server.listen(3000);