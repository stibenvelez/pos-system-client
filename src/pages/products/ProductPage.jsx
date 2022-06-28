import React, { useEffect } from "react";
import InfoProduct from "../../components/products/product/InfoProduct";
import Template from "../../components/ui/Template";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getProductByIdAction } from "../../redux/products/products.action";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        (() => dispatch(getProductByIdAction(id)))();
    }, []);
    

    return (
        <Template
            title="Informacion del producto"
            description="Informacion detalalda del producto"
        >
            <InfoProduct />
        </Template>
    );
};

export default ProductPage;
