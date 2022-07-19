import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Template from "../../components/ui/Template";
import UsersList from "../../components/users/UsersList";
import { getAllUsersAction } from "../../redux/users/users.actions";

const UsersPage = () => {
    const diapatch = useDispatch();
    useEffect(() => {
        diapatch(getAllUsersAction());
    }, []);

    return (
        <Template title="Usuarios" description="Lista de usuarios">
            <div className="max-w-2xl mx-auto">
                <UsersList />
            </div>
        </Template>
    );
};

export default UsersPage;
