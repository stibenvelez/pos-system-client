import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../ui/Table";
//import io from "socket.io-client";
//let socket = io.connect(import.meta.env.VITE_BACKEND_URL);
const UsersList = () => {
    const { users } = useSelector(({ users }) => users);
/*
    const handlePrueba = () => {
        socket.emit("prueba", {data: "hola"});
    };
*/
    return (
        <Table>
            <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        User
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Primer Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Apellido
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Roll
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {users &&
                    users.map((user, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 shadow "
                        >
                            <td className="px-6 py-2">{user.user}</td>
                            <td className="px-6 py-2">{user.firstName}</td>
                            <td className="px-6 py-2">{user.lastName}</td>
                            <td className="px-6 py-2">{user.confirm}</td>
                            <td className="px-6 py-2">
                                <div className="space-x-2">
                                    <Link to={`users/${user.idUser}   `}>
                                        Ver
                                    </Link>
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={()=>handlePrueba()}
                                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                    >
                                        prueba socket
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default UsersList;
