import React from "react";
import { useSelector } from "react-redux";
import Card from "../ui/Card/Card";
import { formatDate } from "../../helpers/FormatDate";

const EgressDetail = () => {
    const egress = useSelector((state) => state.egresses.egress);
    const loading = useSelector((state) => state.egresses.loading);

    if (loading) {
        return (
            <Card>
                <div className="flex gap-4 flex-col p-3">
                    <div className="border rounded-md flex gap-4 p-2">
                        <div>
                            <img
                                src={`/public/assets/img/app/logo.svg`}
                                className="fill-red-500 w-40"
                                alt="React Logo"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-full">


                        </div>
                    </div>

                    <div>
                        <table className="w-full overflow-hidden text-sm text-left text-gray-500 rounded-md dark:text-gray-400">
                            <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Valor.
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        
                                    </th>
                                    <td
                                        scope="row"
                                        className="px-6 py-4text-gray-900"
                                    >
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        );
    }

    if (!egress) {
        return (
            <div>
                <div className="p-3 bg-yellow-100 text-yellow-900 rounded shadow-sm">No se encontro un egreso para mostrar</div>
            </div>
        );
    }


    return (
        <Card>
            <div className="flex gap-4 flex-col p-3">
                <div className="border rounded-md flex gap-4 p-2">
                    <div>
                        <img
                            src={`/public/assets/img/app/logo.svg`}
                            className="fill-red-500 w-40"
                            alt="React Logo"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h3 className="text-2xl font-semibold uppercase">
                                COD. Nº {egress?.idEgress}
                            </h3>
                        </div>
                        <div>
                            <p>fecha: {formatDate(egress?.date)}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="w-full overflow-hidden text-sm text-left text-gray-500 rounded-md dark:text-gray-400">
                        <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Valor.
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4">
                                    {egress?.egressSubCategory}
                                </th>
                                <td
                                    scope="row"
                                    className="px-6 py-4text-gray-900"
                                >
                                    {egress?.value}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    );
};

export default EgressDetail;
