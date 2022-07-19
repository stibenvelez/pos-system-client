import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../ui/Card/Card';
import Spinner from '../ui/Spinners/Spinner';

const EmployeeDetail = () => {


    const { employee, loadingEmployee } = useSelector(
        ({ employees }) => employees
    );
    console.log(employee);

    if (loadingEmployee) {
        return (
            <Card>
                <div className="p-4 flex justify-center">
                    <Spinner />
                </div>
            </Card>
        );
    }
        return (
            <Card>
                <div className="p-4">
                    <h3 className="text-lg text-gray-800 mb-3 font-bold">
                        Ver empleado
                    </h3>
                    <form>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={employee?.name}
                                defaultValue=""
                            />
                        </div>
                        <div>
                            <label htmlFor="document">Documento</label>
                            <input
                                name="document"
                                type="text"
                                placeholder="Documento de identidad"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={employee?.document}
                                defaultValue=""
                            />
                        </div>
                        <div>
                            <label htmlFor="position">Cargo</label>
                            <input
                                name="position"
                                type="text"
                                placeholder="cargo del empleado"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={employee?.position}
                                defaultValue=""
                            />
                        </div>
                        <div>
                            <label htmlFor="observations">Observaciones</label>
                            <textarea
                                name="observations"
                                type="text"
                                placeholder="Observaciones..."
                                rows={4}
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={employee?.observations}
                                defaultValue=""
                            />
                        </div>
                    </form>
                </div>
            </Card>
        );
}

export default EmployeeDetail