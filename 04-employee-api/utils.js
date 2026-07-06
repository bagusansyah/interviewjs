import { getAllUsers, getUserById, getUsersByCity, getCompanies, getBizUsers, getUserCount } from "./employeeService";

function printTitle(title) {
    console.log(title);
}

function printUsers(users) {
    console.log(getAllUsers());
}

function printUser(user) {
    console.log(getUserById());
}

function printCompanies(companies) {
    console.log(getCompanies());
}

export { printTitle, printUsers, printUser, printCompanies }