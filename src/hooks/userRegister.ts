import ApiClient from "../services/api-client";
import RegisterRequest from "../requests/RegisterRequest";
import {useMutation} from "@tanstack/react-query";
import {ErrorResponse} from "../responses/ErrorResponse";
import RegisterResponse from "../responses/RegisterReponse";
import storage from "./useStoredState";


const apiClient = new ApiClient('auth/register');

const useRegister = (request: RegisterRequest) => useMutation({
    mutationKey: ['register', request],
    mutationFn: () => apiClient.register(request),
    onSuccess: ((response : RegisterResponse | any)=> {
        const confirmationToken = response.result.confirmationToken;
        storage.set("confirmationToken", confirmationToken);
        console.log(confirmationToken);
    }),
    onError: ((error : ErrorResponse | any) => {
        console.log(error.response?.data.status);
        console.log(error.response?.data.message);
    }),
})

export default useRegister;