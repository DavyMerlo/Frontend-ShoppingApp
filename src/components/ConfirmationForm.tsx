import useConfirmation from "../hooks/useConfirmation";
import storage from "../hooks/useStoredState";
import User from "../entities/User";
import {useFormStore} from "../services/store";
import {useEffect, useState} from "react";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import Product from "../entities/Product";


const ConfirmationForm = () => {

    const confirmationToken = storage.get<User>("confirmationToken");
    const email = useFormStore().formData.email;


    const [activated, setActivated] = useState<Boolean>(false);

    useEffect(() => {
        const sock = new SockJS('http://localhost:8888/api/v1/auth');
        const stompClient = new Client({ webSocketFactory: () => sock });
        stompClient.onConnect = () => {
            console.log('STOMP: Connected');
            stompClient.subscribe('/topic/accountstatus', (message) => {
                const receivedData = JSON.parse(message.body);
                console.log(receivedData);
                // Assuming receivedData contains a property like 'confirmationStatus' indicating confirmation status
                // if (receivedData.set === 'confirmed') {
                //     setActivated(true); // Update state to indicate the link has been confirmed
                // }
                // You can add more conditions or handling based on your received data
            });
        };
        stompClient.activate();
        return () => {
            stompClient.deactivate();
        };
    }, []);

    // const handleWebSocketData = (receivedData : any) => {
    //     if (receivedData.product) {
    //         const newProduct = receivedData.product;
    //         if (newProduct.categoryId === categoryId && newProduct.category.subCategoryId === subCategoryId) {
    //             setWebsocketProducts((prevProducts) => [...prevProducts, newProduct]);
    //         }
    //     } else {
    //         setWebsocketProducts((prevProducts) => [...prevProducts, receivedData]);
    //     }
    // };

    return(
        <div>
            <h1>Confirmation page</h1>
            <p>A confirmation email has been send to {email}</p>
            <p>When the link has been corfirmed you will be automaticly redirect to login page</p>
        </div>
    )
}

export default ConfirmationForm;