import {useCallback, useState} from "react";

const useWebSocket = (): [WebSocket | null, () => void] => {
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

    // Function to initialize WebSocket connection
    const connectWebSocket = useCallback(() => {
        const ws = new WebSocket('ws://localhost:8080/ws'); // Replace with your WebSocket server URL

        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.onmessage = (event : any) => {
            const message = JSON.parse(event.data);
            // Handle the received message, update state, or perform actions
            console.log('Received message:', message);
        };

        setWebSocket(ws);

        return () => {
            if (ws) {
                ws.close(); // Close WebSocket connection on manual disconnect
            }
        };
    }, []);

    return [webSocket, connectWebSocket];
}

export default useWebSocket;