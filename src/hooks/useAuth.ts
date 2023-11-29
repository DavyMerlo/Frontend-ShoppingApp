import ApiClient from "../services/api-client";
import LoginRequest from "../requests/LoginRequest";
import {useMutation} from "@tanstack/react-query";
import LoginResponse from "../responses/LoginResponse";
import ErrorResponse from "../responses/ErrorResponse";
import storage from "./useStoredState";

const apiClient = new ApiClient('/auth/authenticate');

const useAuth = (request: LoginRequest) => useMutation({
    mutationKey: ['authenticate', request],
    mutationFn: () => apiClient.login(request),
    onSuccess: ((response : LoginResponse | any)=> {
        const accessToken = response.result.accessToken;
        const user = response.result.user;
        storage.set("user", user);
        storage.set("token", accessToken);
    }),
    onError: ((error : ErrorResponse | any) => {
        console.log(error.response?.data.status);
        console.log(error.response?.data.message);
    }),
});

export default useAuth;