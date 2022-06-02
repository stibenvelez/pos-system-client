import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getReportrFiltersAction } from "../../actions/reportsActions";
import clienteAxios from "../../config/axios";
import Card from "../ui/Card/Card";
import { XIcon } from "@heroicons/react/solid";
import {formatDate} from '../../helpers/FormatDate'

const firtMonthDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
);

const lastDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
);
    

console.log(lastDay);  
const OptionsFilters = ({ setShowFilters }) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({
        dateFrom: formatDate(firtMonthDay),
        dateTo: formatDate(lastDay),
    });
    const [employees, setEmployees] = useState([]);

    const handleChange = (e) => {
        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const getFilter = () =>
            dispatch(
                getReportrFiltersAction(Object.fromEntries([...searchParams]))
            );
        getFilter();
    }, [searchParams]);

    useEffect(() => {
        const getEmployees = async () => {
            const result = await clienteAxios("/employees");
            setEmployees(result.data);
        };

        getEmployees();
    }, [searchParams]);

    return (
        <Card className="py-4">
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-end ">
                    <div
                        className="hover:bg-indigo-100 cursor-pointer p-1 rounded-full transition duration-200 ease-in-out hover:text-indigo-600 hover:shadow-sm text-gray-700"
                        onClick={()=>setShowFilters(false)}
                    >
                        <XIcon className="h-5 w-5 " />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 lg:col-span-4">
                    <div className="">
                        <label htmlform="dateFrom">Desde: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateFrom"
                            name="dateFrom"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).dateFrom
                            }
                        />
                    </div>
                    <div>
                        <label htmlform="dateTo">Hasta: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateTo"
                            name="dateTo"
                            onChange={handleChange}
                            value={Object.fromEntries([...searchParams]).dateTo}
                        />
                    </div>
                    <div>
                        <label htmlform="category">Categoria: </label>
                        <select
                            className="px-2 py-2 border rounded bg-gray-50"
                            name="category"
                            id="category"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).category
                            }
                        >
                            <option value="">-- todas --</option>
                            <option value="1">Sonido</option>
                            <option value="2">Lujo</option>
                            <option value="3">Polarizado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlform="employe">Empleados: </label>
                        <select
                            className="px-2 py-2 border rounded bg-gray-50"
                            name="employe"
                            id="employe"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).employe
                            }
                        >
                            <option value="">-- todos --</option>
                            {employees &&
                                employees.map((employe) => (
                                    <option
                                        key={employe.idEmploye}
                                        value={employe.idEmploye}
                                    >
                                        {employe.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default OptionsFilters;