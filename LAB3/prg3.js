import http from 'http';

const server= http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.end("<h1> hello client part 3 </h1>");
    console.log('Server hit by client');
});

server.listen(4444, ()=>{
    console.log('Server is listening on port 4444');
});