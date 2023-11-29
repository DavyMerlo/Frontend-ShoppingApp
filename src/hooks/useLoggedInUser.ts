import ApiClient from "../services/api-client";
import UserResponse from "../responses/UserResponse";
import {useQuery} from "@tanstack/react-query";


const useLoggedInUser = (userId : string) => {
    const api = new ApiClient<UserResponse>("users");
    return useQuery<any, Error>(['usersAddress', userId], async () => {
        try {
            const data = await api.getById(userId, "address");
            console.log(data);
            return data || [];
        } catch (error) {
            throw new Error('Error fetching user addresses');
        }
    });
}

export default useLoggedInUser;


