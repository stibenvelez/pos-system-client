import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../../config/axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinners/Spinner";
import Card from "../ui/Card/Card";
import { validateFormProduct } from "./utilities/validateFormProduct";

const INITIAL_VALUES = {
    product: "",
    brand: "",
    idProductCategory: "",
    commissionPercentage: 0,
    unitCost: 0,
    unitPrice: 0,
    observations: "",
    productImg: {},
};

const ESTATE_PRODUCT = {
    add: "ADD",
    edit: "EDIT",
    view: "VIEW",
};

const FormNewProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [productCategories, setProductCategories] = useState([]);
    const [newProduct, setNewProduct] = useState(INITIAL_VALUES);
    const [errors, setErrors] = useState({});
    const [stateForm, setStateForm] = useState("");

    useEffect(() => {
        (async () => {
            const res = await clienteAxios("/product-categories");
            setProductCategories(res.data);
        })();
    }, []);

    const product = useSelector(({ products }) => products.product);
    const loading = useSelector(({ products }) => products.loading);

    useEffect(() => {
        if (!id) {
            setStateForm(ESTATE_PRODUCT.add);
            return;
        }
        setStateForm(ESTATE_PRODUCT.edit);
    }, [id]);

    /*
    const formik = useFormik({
        initialValues: id ? product : initialValues,
        validationSchema: ProductSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            actionSubmit(values);
        },
    });
*/

    const handleChange = ({ name, value }) => {
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = await validateFormProduct(newProduct);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const data = new FormData();
        data.append("product", newProduct.product);
        data.append("brand", newProduct.brand);
        data.append("idProductCategory", newProduct.idProductCategory);
        data.append("commissionPercentage", newProduct.commissionPercentage);
        data.append("unitCost", newProduct.unitCost);
        data.append("unitPrice", newProduct.unitPrice);
        data.append("observations", newProduct.observations);
        data.append("image", newProduct.image);

        if (product && product.idProduct) {
            //dispatch(editProductByIdAction(values));
            //return;
        }
        //dispatch(addNewProductAction(data));
    };

    if (loading)
        return (
            <Card className="flex items-center justify-center h-72">
                <Spinner />
            </Card>
        );

    const SectionImgProduct = () => {
        return (
            <div>
                <div className="overflow-hidden bg-gray-300 border-8 rounded w-72 h-72">
                    <img
                        className="object-contain object-center rounded"
                        src={
                            newProduct.image
                                ? URL.createObjectURL(newProduct?.image)
                                : `${
                                      import.meta.env.VITE_PUBLIC_URL
                                  }/img/products/${
                                      newProduct.image ?? "productDefault.png"
                                  }`
                        }
                        alt="product"
                    />
                </div>
                <div className="py-4">
                    <label class="block">
                        <span class="sr-only">Choose File</span>
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-white hover:file:bg-slate-600 hover:file:text-white focus:outline-none focus:shadow-outline hover:file:cursor-pointer"
                            aria-describedby="user_avatar_help"
                            id="user_avatar"
                            name="image"
                            onChange={(e) =>
                                handleChange({
                                    name: e.target.name,
                                    value: e.target.files[0],
                                })
                            }
                        />
                    </label>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center gap-8 lg:items-start lg:justify-center lg:flex-row">
            {SectionImgProduct()}
            <div className="w-full">
                <div className="grid grid-cols-1 gap-4 ">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="flex flex-col gap-4 p-10 bg-white rounded-md shadow">
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                        >
                                            Producto
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="product"
                                            name="product"
                                            type="text"
                                            placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                            autoComplete="product"
                                            className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.product}
                                        />

                                        {errors.product && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {errors.product}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="category"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Categoria
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="idProductCategory"
                                            name="idProductCategory"
                                            autoComplete="idProductCategory"
                                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={
                                                newProduct.pidProductCategoryroduct
                                            }
                                        >
                                            <option hidden value="">
                                                --selecionar --
                                            </option>
                                            {productCategories.map((item) => (
                                                <option
                                                    key={item.idProductCategory}
                                                    value={
                                                        item.idProductCategory
                                                    }
                                                >
                                                    {item.category}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.idProductCategory && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {errors.idProductCategory}
                                                </p>
                                            </div>
                                        )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.brand}
                                        />

                                        {errors.brand &&
                                            newProduct.brand == "" && (
                                                <div>
                                                    <p className="p-1 text-sm text-red-600">
                                                        {errors.brand}
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Precio de venta
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="unitPrice"
                                            name="unitPrice"
                                            type="text"
                                            placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                            autoComplete="unitPrice"
                                            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.unitPrice}
                                        />

                                        {errors.unitPrice && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {errors.unitPrice}
                                                </p>
                                            </div>
                                        )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.unitCost}
                                        />
                                        {errors.unitCost && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {values.unitCost}
                                                </p>
                                            </div>
                                        )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={
                                                newProduct.commissionPercentage
                                            }
                                        />

                                        {errors.commissionPercentage &&
                                            newProduct.commissionPercentage ==
                                                "" && (
                                                <div>
                                                    <p className="p-1 text-sm text-red-600">
                                                        {
                                                            errors.commissionPercentage
                                                        }
                                                    </p>
                                                </div>
                                            )}
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
                                            onChange={(e) =>
                                                handleChange({
                                                    name: e.target.name,
                                                    value: e.target.value,
                                                })
                                            }
                                            value={newProduct.observations}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="px-4 py-2 text-white rounded-md cursor-pointer bg-slate-800 hover:bg-slate-700"
                                    type="submit"
                                >
                                    {Object.keys(product).length
                                        ? "Editar Producto"
                                        : "agregar"}
                                </button>
                                <input
                                    type="button"
                                    onClick={() => navigate(-1)}
                                    className="block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-300"
                                    value="Cancelar"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormNewProduct;
