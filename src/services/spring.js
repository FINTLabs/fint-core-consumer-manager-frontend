import api from './api';

export const getLatestSpringVersion = async () => {
    try {
        const response = await api.get('/spring/version');
        return response.data;
    } catch (error) {
        console.error('Error fetching Spring version', error);
        return null
    }
};
