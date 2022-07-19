import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinners/Spinner";
import SaleItem from "./saleItem";

const SalesList = () => {
    const sales = useSelector(({ sales }) => sales.sales);
    const loading = useSelector(({ sales }) => sales.loading);
    const error = useSelector(({ sales }) => sales.error);

    if (loading) {
        return (
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"></table>
                <div className="flex justify-center w-full my-8">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (sales.length === 0) {
        return (
            <div className="p-5 py-3 text-sm text-yellow-800 border border-yellow-200 shadow-md bg-amber-100">
                <p>No se encontraron resaultados</p>
            </div>
        );
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Documento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale) => (
                            <SaleItem sale={sale} key={sale.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesList;
