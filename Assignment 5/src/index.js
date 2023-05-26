var http = require("http");

const httpServer = http.createServer(handleServer);


const data = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
}


function handleServer(req, res) {

    let url = req.url;
    if (url === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Welcome to dominos");
        console.log("welcome page")
        res.end();
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
       /* res.write(
            `Phone : ${data.phone}  
email : ${data.email}`

        )*/
        res.write(JSON.stringify(data))
        console.log("Contact page")
        res.end();
    }else{
        res.writeHead(404 ,'Content-Type : text/html')
        
        res.write("invalid Response")
        res.end()
    }
};


httpServer.listen(8081, () => {
    console.log("server are listening at port 8081")
})

module.exports = httpServer;