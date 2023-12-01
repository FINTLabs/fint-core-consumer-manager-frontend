import axios from "axios";

export const getLatestGradleVersion = async () => {
    try {
        const response = await axios.get('/gradle/version');
        return response.data;
    } catch (error) {
        console.error('Error fetching Gradle version', error);
        return null
    }
};