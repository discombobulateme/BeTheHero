import axios from 'axios';

//IMPORTANT! Don't use localhost, use the IP your cellphone is connected to
//chech IP on the page Expo opened to give you a QR
const api = axios.create({
    baseURL: 'http://192.168.2.103:3333'
});

export default api;  