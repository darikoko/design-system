import {writable} from "svelte/store";
import {browser} from "$app/environment";

const storedToken = JSON.parse(browser && localStorage.getItem("authToken")) || "";

export const authToken = writable(browser && storedToken);
authToken.subscribe(
    (val) => browser && (localStorage.authToken = JSON.stringify(val))
);
