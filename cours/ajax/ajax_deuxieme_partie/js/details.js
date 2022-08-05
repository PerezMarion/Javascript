import { UserDetails } from "./components/user-details.js";
import { Api } from "./services/api-config.js";

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get("id");

const userDetails = document.querySelector("#user-details");

Api.get("/users/" + id).then(function (response) {
    const user = response.data;
    userDetails.innerHTML = UserDetails(user);
});