// Centralized API endpoints
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://collaborative-text-editor-b1dp.onrender.com/api/campaign';

export const API_ENDPOINTS = {
    CAMPAIGNS: {
        GET_ALL: `${BASE_URL}`,
        CREATE: `${BASE_URL}`,
        UPDATE: (id: string) => `${BASE_URL}/campaigns/${id}`,
        DELETE: (id: string) => `${BASE_URL}/campaigns/${id}`,
    },
} as const;
