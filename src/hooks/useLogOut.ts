import ApiClient from "../services/api-client";
import {useMutation} from "@tanstack/react-query";

const apiClient = new ApiClient('logout');

const useLogout = () => {
    return useMutation(apiClient.logout);
}

export default useLogout;