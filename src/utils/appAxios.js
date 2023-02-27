import axios from "axios";

export const appAxios = axios.create({
    baseURL: 'https://kandilli-earthquake-api.vercel.app'
});