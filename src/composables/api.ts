import axios from "axios"

const config = { baseURL: import.meta.env.VITE_API_URL! }
//const config = { baseURL: `${process.env.VITE_API_URL}` }

alert(`url: ${config.baseURL}`)

export const api = axios.create(config);
