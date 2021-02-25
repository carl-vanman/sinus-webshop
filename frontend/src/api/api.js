import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/"
export const PRODUCTS_URL = `${BASE_URL}products`

export const get = async (url) => {

    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error)
    }
}
