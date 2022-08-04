import { BASE_URL } from "../constants.js";

export function fetchUsers() {
    return axios.get(BASE_URL).then(function (response) {
        return response.data;
    });
}

export function fetchUserById(id) {
    axios.get(`${BASE_URL}/${id}`).then(function (response) {
        return response.data;
    });
}