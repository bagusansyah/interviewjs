import { getUsers } from "./api.js";

function getAllUsers() {
    return getUsers();
}

function getUserById(id) {
    return getUsers().find(user => user.id === id ? true : null);
}

function getUsersByCity(city) {
    return getUsers().filter(user => user.address.city === city);
}

function getCompanies() {
    return getUsers().map(user => user.company.name);
}

function getBizUsers() {
    return getUsers().filter(user => user.company.includes(".biz"));
}

function getUserCount() {
    return getUsers().length;
}

export { getAllUsers, getUserById, getUsersByCity, getCompanies, getBizUsers, getUserCount }