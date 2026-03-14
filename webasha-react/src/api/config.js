import axios from 'axios';

export const API_BASE_URL = "http://localhost:8000/api";
export const MEDIA_BASE_URL = "http://localhost:8000/media";

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`API Fetch Error (${endpoint}):`, error);
        throw error;
    }
};
