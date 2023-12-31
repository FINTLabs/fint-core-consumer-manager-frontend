import axios from "axios";

export const getLatestSpringVersion = async () => {
    try {
        const response = await axios.get('/spring/version');
        return response.data;
    } catch (error) {
        console.error('Error fetching Spring version', error);
        return null
    }
};
