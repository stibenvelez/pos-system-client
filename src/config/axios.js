import axios from "axios";

const token = localStorage.getItem("token");
let headers = {};

if (!token) {
    console.log("no hay token");
    localStorage.removeItem("token");
    headers = {};
} else {
    headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers,
});

export default clienteAxios;
