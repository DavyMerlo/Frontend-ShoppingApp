import Address from "./Address";

export default interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    address: Address;
}