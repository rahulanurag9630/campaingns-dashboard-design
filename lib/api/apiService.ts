// lib/api/apiService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiService = async <T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.request({
            method,
            url,
            data,
            ...config,
        });
        return response.data;
    } catch (error: any) {
        console.error(`API Error [${method} ${url}]:`, error.response || error.message);
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
};
