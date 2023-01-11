import axios from "./axios";

export function testCall() {
    return axios.get('/test');
};

export function testListCall() {
    return axios.get('/address/get-all');
};

export function listAddresses() {
    return axios.get('/address/get-all');
};

export const login = (user) => {
    return axios.post('/login', {}, { auth: user });
};

export function loginCall() {
    return axios.get('/login');
};

export const createAddress = (address) => {
    return axios.post('/address/add', address);
};

export const createPublisher = (publisher) => {
    return axios.post('publisher/add', publisher)
};

export const setAuthorizationHeader = ({ username, password, isLoggedIn }) => {
    if (isLoggedIn) {
        axios.defaults.headers.common['Authorization'] = `Basic ${btoa(
            username + ':' + password
        )}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};