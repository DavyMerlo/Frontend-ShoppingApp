import User from "../entities/User";

export default interface LoginResponse {
    result: {
        accessToken: string;
        refreshToken: string;
        user: User;
    }
}