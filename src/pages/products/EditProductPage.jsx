import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllBrandsAction } from "../../actions/brand.action";
import { getAllProductsCategoriesAction } from "../../actions/productCategory.action";

import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";
import { getProductByIdAction } from "../../redux/products/products.action";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => dispatch(getProductByIdAction(id));
        id && getProduct();
    }, []);

    useEffect(() => {
        (() => {
            dispatch(getAllProductsCategoriesAction());
        })();
    }, []);
    useEffect(() => {
        (() => dispatch(getAllBrandsAction()))();
    }, []);

    return (
        <Template
            title={"Editar Producto"}
            description={"Edite los datos del producto"}
            className="container mx-auto"
        >
            <div>
                <FormNewProduct />
            </div>
        </Template>
    );
};

export default EditProductPage;
