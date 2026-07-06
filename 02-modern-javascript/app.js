import { add, subtract, multiply, divide } from "./math";
import { employee } from "./employee";
import { formatCurrency, formatName } from "./utils";
import { MAX_SALARY, MIN_SALARY, DEFAULT_DEPARTMENT } from "./constants";

console.log("=== Employe Information ===");
console.log(
    `Name: ${formatName(employee.name)}
     \n\nDepartment: ${employee.department}
     \n\nSalary: ${formatCurrency(employee.salary)}
     \n\nCan Get Bonus: ${employee.salary }`);
