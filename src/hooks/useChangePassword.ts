import ApiClient from "../services/api-client";
import ChangePassWordRequest from "../requests/ChangePassWordRequest";
import {useMutation} from "@tanstack/react-query";
import PasswordChangedResponse from "../responses/PasswordChangedResponse";
import {ErrorResponse} from "../responses/ErrorResponse";

const apiClient = new ApiClient('users');

const useChangePassword = (request : ChangePassWordRequest, connectedUser: String) => useMutation({
    mutationKey: ['users', request, connectedUser],
    mutationFn: () => apiClient.patchLogin(request),
    onSuccess: ((response : PasswordChangedResponse | any)=> {
        const message = response.result.message;
        console.log(message);
    }),
    onError: ((error : ErrorResponse | any) => {
        // console.log(error.response?.message);
        // console.log(error.response?.data.message);
    }),
})

export default useChangePassword;