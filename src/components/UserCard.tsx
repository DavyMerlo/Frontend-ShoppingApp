import {Card, CardBody, Text} from "@chakra-ui/react";
import storage from "../hooks/useStoredState";
import User from "../entities/User";


const UserCard = () => {
    const user = storage.get<User>('user');
    const token = storage.get<string>('token');
    return (
        <Card>
            <CardBody>
                <Text>{user.firstName}</Text>
                <Text>{user.lastName}</Text>
                <Text>{user.email}</Text>
                <Text>{user.role}</Text>
                <Text>{token}</Text>
            </CardBody>
        </Card>
    )
}

export default UserCard;