import {Text} from "@chakra-ui/react";
import storage from "../hooks/useStoredState";
import User from "../entities/User";
import useLoggedInUser from "../hooks/useLoggedInUser";

const ProfileGrid = () => {

    const user = storage.get<User>("user");

    const { data, isLoading, isError } = useLoggedInUser(user.id.toString());

    return (
        <>
            <Text>{data?.result.user.firstName}</Text>
            <Text>{data?.result.user.address.street}</Text>
        </>
    )
}

export default ProfileGrid;