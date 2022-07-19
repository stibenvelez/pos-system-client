import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SlideOver from "../../components/ui/SlideOver";
import Table from "../../components/ui/Table";

const BrandsList = ({ isOpen, setOpen }) => {
    const { brands } = useSelector(({ brands }) => brands);
    return (
        <>
            

            <Table>
                <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Marca
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {brands &&
                        brands.map((brand, i) => (
                            <tr
                                key={i}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 shadow "
                            >
                                <td className="px-6 py-2">{brand.brand}</td>
                                <td className="px-6 py-2">{brand.category}</td>
                                <td className="px-6 py-2">{brand.state}</td>
                                <td className="px-6 py-2">
                                    <div className="space-x-2">
                                        <Link to={`brands/${brand.brandId}   `}>
                                            Ver
                                        </Link>
                                        <button
                                            type="button"
                                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                        >
                                            Editar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
};

export default BrandsList;
