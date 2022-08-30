const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('Listening on port 8000');

const webServer = new webSocketServer({
    httpServer: server
})

const clients = {};

const getID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
}

webServer.on('request', function(request) {
    var userID = getID();
    console.log((new Date()) + ' Received a new connection from origin ' + request.origin + '.');

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('There are now ' + webServer.connections.length + ' clients connected.\n');

    connection.on('message', function(message) {
        for (let key in clients) {
            clients[key].sendUTF(message.utf8Data);
        }
        /* if (message.type === 'utf8') {
            console.log('Received message: ', message.utf8Data);

            for (let key in clients) {
                clients[key].sendUTF(message.utf8Data);
            }
        } */
    })
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + 'Dude from ' + connection.remoteAddress + 'disconnected');
        delete clients.userID;
    })
})