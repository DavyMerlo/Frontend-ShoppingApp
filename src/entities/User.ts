import Address from "./Address";

export default interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    address: Address;
}