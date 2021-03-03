import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/"
export const PRODUCTS_URL = `${BASE_URL}products`
export const ORDER_URL = `${BASE_URL}orders`
export const REGISTER_USER_URL = `${BASE_URL}register`
export const LOGIN_USER_URL = `${BASE_URL}auth`
export const USER_URL = `${BASE_URL}me`


export const get = async (url) => {

    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const post = async (url, obj) => {

    try {
        const response = await axios.post(url, obj)
        return response
    } catch (error) {
        console.log(error)
        return 'error'
    }
}

export const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}