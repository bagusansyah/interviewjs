import { printTitle, printUsers, printUser, printCompanies } from "./utils.js"
import { getAllUsers, getUserById, getUsersByCity, getCompanies, getBizUsers, getUserCount } from "./employeeService.js";

printTitle("EMPLOYEE DASHBOARD");
getUserCount();
// printUser(5);
printUsers();