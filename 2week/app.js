const http = require("http");
const {
    defaultRouteController,
    gameRouteController,
    mainRouteController,
    voteRouteController
} = require('./controllers')
const staticFile = require("./appModules/http-utils/mime-types");
const PORT = 3005
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    switch(url){
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break
        default:
            defaultRouteController(res, url);
    }
})
server.listen(PORT, ()=>{
    console.log(`Listen on ${PORT}`)
})