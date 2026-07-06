const employee = {
    id: 1,
    name: "Bagus",
    salary: 8000000,
    department: "IT",
    active: true,
};

const { name, salary, department, active} = employee;
function printEmployee() {
    console.log(`Nama: ${name}`);
    console.log(`Department: ${department}`);
    console.log(`Gaji: ${salary}`);
}
printEmployee();

const updatedEmployee = salary += 4000000;
console.log(updatedEmployee);

const employees = [
    "Bagus",
    "Andi",
];

const newEmployees = [...employees, "Sinta"]
console.log(newEmployees);

function updateSalary(employee, newSalary) {
    const copyEmployee = { ...employee };
    const newSalary = copyEmployee.salary;
    const result = updateSalary(employee, newSalary);
    return result;
}

const employeee = {
    id: 1,
    name: "Bagus",
    salary: 8000000,
    address: {
        city: "Jakarta"
    }
};

const copy = { ... employee};

function totalSalary(...numbers) {
    const totalNumber = numbers.reduce((totalAngka, numbers) => totalAngka + numbers, 0);
    return totalNumber;
}

function showEmployees(...names) {
    const allEmployee = names;
    return allEmployee;
}

const {name, ...employee} = employee;