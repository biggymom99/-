import axios from "axios";

const api = axios.create({
    baseURL: "api/v1/users/signup",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;