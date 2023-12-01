import api from './api';

export const getLatestGradleVersion = async () => {
    try {
        const response = await api.get('/gradle/version');
        return response.data;
    } catch (error) {
        console.error('Error fetching Gradle version', error);
        return null
    }
};