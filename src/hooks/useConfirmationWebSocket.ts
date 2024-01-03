import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useFormStore } from '../services/store';

const useConfirmationWebSocket = () => {
  const navigate = useNavigate();
  const email = useFormStore().formData.email;
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const sock = new SockJS("http://localhost:8888/api/v1/auth");
    const stompClient = new Client({ webSocketFactory: () => sock });
    stompClient.onConnect = () => {
      console.log("STOMP: Connected");
      stompClient.subscribe("/topic/status", (message) => {
        const isConfirmed = JSON.parse(message.body);
        setConfirmed(isConfirmed);
      });
    };
    stompClient.activate();
    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    if (confirmed) {
      navigate("/login");
    }
  }, [confirmed, navigate]);

  return { email };
};

export default useConfirmationWebSocket;
