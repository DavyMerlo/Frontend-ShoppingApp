import axios, {AxiosRequestConfig} from "axios";
import ProductResponse from "../responses/ProductResponse";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8888/api/v1",
});

axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) : Promise<any> => {
        config.headers = config.headers ?? {};
        const token = localStorage.getItem('token');
        if(token) {
            config.headers["Content-Type"] = 'application/json';
            config.headers.Authorization = `Bearer ${token.replace(/^"(.*)"$/, '$1')}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class ApiClient<T> {
    endPoint: string;

    constructor(endpoint: string) {
        this.endPoint = endpoint;
    }

    login = async (data: T): Promise<T> => {
            return  axiosInstance
            .post<T>('/auth/authenticate', data)
            .then(res => res.data)
    };

    logout = async () => {
        return axiosInstance
            .post('/auth/' + this.endPoint)
    }

    getAll = async (config: AxiosRequestConfig) => {
        return await axiosInstance
            .get<T>(this.endPoint, config)
            .then(res => res.data);
    };
}

export default ApiClient;