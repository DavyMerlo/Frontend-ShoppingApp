import User from "../entities/User";

export default interface UserResponse{
    message: string;
    status: number;
    result: {
        user: User;
    }
}