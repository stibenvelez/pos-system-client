import React from "react";
import { useDispatch } from "react-redux";
import { getEmployeeByIdAction } from "../../redux/employees/employees.actions";

import Table from "../ui/Table";
import Row from "../ui/Table/Row";

const EmployeeList = ({ employees, setOptionsState }) => {
    const dispatch = useDispatch();

    const handleViewEmployee = (id) => {
        setOptionsState("viewEmploye");
        dispatch(getEmployeeByIdAction(id));
    };

    const COLUMNS = [{ name: "Nombre" }, { name: "Acciones" }];

    const DATA =
        employees &&
        employees.map((employe) => ({
            name: employe.name,
            actions: (
                <div className="flex justify-center">
                    <button
                        onClick={() => handleViewEmployee(employe.idEmploye)}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                    >
                        Ver
                    </button>
                    {/* <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800">
                        Editar
                    </button> */}
                    <button
                        className={`items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r  ${
                            employe.idState === 1
                                ? "hover:bg-red-500"
                                : "hover:bg-green-600"
                        } hover:bg-red-500`}
                    >
                        Desactivar
                    </button>
                </div>
            ),
        }));

    return (
        <Table>
            <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left">
                    {COLUMNS.map((column, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {DATA.map((employe, index) => (
                    <Row key={index}>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.actions}
                        </th>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
};

export default EmployeeList;
