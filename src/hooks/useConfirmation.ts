import ApiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";

const useConfirmation = (userId : String) => {
    const api = new ApiClient<String>("status/{userId}");
    return useQuery<any, Error>(['status', userId], async () => {
        try {
            const data = await api.getBy(userId);
            console.log(data);
            return data || [];
        } catch (error) {
            throw new Error('Error fetching account status');
        }
    });
}

export default useConfirmation;