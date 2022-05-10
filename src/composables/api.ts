import axios from "axios"

const config = {
	baseURL: import.meta.env.VITE_API_URL!,
	headers: {
		"Content-Type": "application/json"
	}
}

export const api = axios.create(config);
