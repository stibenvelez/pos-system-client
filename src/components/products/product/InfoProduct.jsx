import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { formatDateTime } from "../../../helpers/FormatDate";

const InfoProduct = () => {
    const navigate = useNavigate();
    const product = useSelector(({ products }) => products.product);

    return (
        <div className="flex flex-col items-center gap-8 lg:items-start lg:justify-center lg:flex-row">
            <div className="bg-gray-300 border-8 rounded w-72">
                {!product.image ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="object-contain text-gray-400 rounded"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                    </svg>
                ) : (
                    <img
                        className="object-contain w-full rounded"
                        src={`${
                            import.meta.env.VITE_BACKEND_URL
                        }/static/products/images/${product.image}`}
                        alt="product"
                    />
                )}
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow md:p-10">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700 capitalize"
                                    >
                                        Producto
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="product"
                                        name="product"
                                        type="text"
                                        placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="product"
                                        className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.product}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Categoria
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="idProductCategory"
                                        name="idProductCategory"
                                        autoComplete="idProductCategory"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.category}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Marca
                                    </label>
                                    <input
                                        id="brand"
                                        name="brand"
                                        type="text"
                                        placeholder="Pionneer, Bose, Focal, Kenwood"
                                        autoComplete="brand"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.brand}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Precio de venta
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="unitPrice"
                                        name="unitPrice"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="unitPrice"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.unitPrice}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="unitCost"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Costo unitario
                                    </label>
                                    <input
                                        id="unitCost"
                                        name="unitCost"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.unitCost}
                                        readOnly
                                    />
                                    product
                                </div>
                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        % comisión
                                    </label>
                                    <input
                                        id="commissionPercentage"
                                        name="commissionPercentage"
                                        type="text"
                                        placeholder="% 000"
                                        autoComplete="commissionPercentage"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={
                                            product?.commissionPercentage
                                        }
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Valor de comision
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="commissionValue"
                                        name="commissionValue"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="commissionValue"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.commissionValue}
                                        readOnly
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="createdAt"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Creado el:
                                        <span className="text-red-600">*</span>
                                    </label>

                                    {formatDateTime(product?.createAt)}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="createdAt"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Ultima modificación:
                                        <span className="text-red-600">*</span>
                                    </label>

                                    {formatDateTime(product?.updateAt)}
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <label
                                        htmlFor="observations"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Notas
                                    </label>
                                    <textarea
                                        id="observations"
                                        name="observations"
                                        autoComplete="observations"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={product?.observations}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 py-3">
                        <Link
                            to={`/dashboard/products/edit-product/${product?.idProduct}`}
                            className="px-3 py-2 text-white transition duration-150 ease-in-out rounded-md bg-slate-800 hover:bg-slate-700"
                        >
                            Editar producto
                        </Link>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-3 py-2 text-white transition duration-150 ease-in-out bg-gray-500 rounded-md hover:bg-gray-400"
                        >
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoProduct;
