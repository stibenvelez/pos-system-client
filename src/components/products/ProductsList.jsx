import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinners/Spinner";
import ItemProduct from "./ItemProduct";
import Table from '../ui/Table';
const ProductsList = () => {
    const products = useSelector(({ products }) => products.products);
    const loading = useSelector(({ products }) => products.loading);

    if (products.length === 0 && !loading) {
        return (
            <div className="p-5 py-3 text-sm text-yellow-800 border border-yellow-200 shadow-md bg-amber-100">
                <p>No se encontraron resultados</p>
            </div>
        );
    }
    
    return (
        <div>
            <Table>
                <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Categoría
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Costo unitario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio de venta
                        </th>
                        <th scope="col" className="px-6 py-3">
                            % de comision
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Accions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((productData) => (
                        <ItemProduct
                            productData={productData}
                            key={productData.idProduct}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductsList;
