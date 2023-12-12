import http from 'http';
import WebSocket from 'ws';

const server = () => {
    const server = http.createServer();
    const wsServer = new WebSocket.Server({ server });
    const port = 8888;

    server.listen(port, () => {
        console.log(`WebSocket server is running on ${port}`);
    });
}

export default server;