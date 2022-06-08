import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "./actions/authAction";
import Routers from "./routes";
import "sweetalert2/dist/sweetalert2.min.css";
import "react-toastify/dist/ReactToastify.css";
import "vite/modulepreload-polyfill";



const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        (() => dispatch(AuthAction()))();
    }, []);
    
    return (
        <div>
            <Routers />
        </div>
    );
};

export default App;
