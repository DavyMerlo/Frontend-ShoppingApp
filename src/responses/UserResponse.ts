import Category from "../entities/Category";
import User from "../entities/User";
import Address from "../entities/Address";


export default interface UserResponse{
    message: string;
    status: number;
    result: {
        user: User;
    }
}