import User from "../entities/User";

export default interface RegisterResponse {
    result: {
        confirmationToken: string;
        user: User;
    }
}