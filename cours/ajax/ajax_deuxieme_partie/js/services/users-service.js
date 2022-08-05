import { Api } from "./api-config.js";

export class UsersService {

    constructor() {
        this.url = "/users";
    }

    fetchUsers() {
        return Api.get(this.url).then(function (response) {
            return response.data;
        });
    }

    fetchUserById(id) {
        Api.get(this.url + "/" + id).then(function (response) {
            return response.data;
        });
    }
}