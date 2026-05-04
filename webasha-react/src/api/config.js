import axios from 'axios';

// Detect if we are running in development or production
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Base URLs
const BASE_URL = isDevelopment ? `${import.meta.env.VITE_API_URL}` : "";

export const API_BASE_URL = `${BASE_URL}/api`;
export const MEDIA_BASE_URL = `${BASE_URL}/media`;

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`API Fetch Error (${endpoint}):`, error);
        throw error;
    }
};
