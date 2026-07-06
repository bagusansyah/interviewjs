const employees = [
  {
    id: 1,
    name: "Bagus",
    department: "IT",
    salary: 8000000,
    active: true,
  },
  {
    id: 2,
    name: "Budi",
    department: "HR",
    salary: 6000000,
    active: true,
  },
  {
    id: 3,
    name: "Andi",
    department: "IT",
    salary: 12000000,
    active: false,
  },
  {
    id: 4,
    name: "Rina",
    department: "Finance",
    salary: 7000000,
    active: true,
  },
  {
    id: 5,
    name: "Sinta",
    department: "Marketing",
    salary: 9000000,
    active: true,
  },
  {
    id: 6,
    name: "Doni",
    department: "HR",
    salary: 5500000,
    active: false,
  },
  {
    id: 7,
    name: "Vina",
    department: "IT",
    salary: 11000000,
    active: true,
  },
  {
    id: 8,
    name: "Gina",
    department: "Finance",
    salary: 7500000,
    active: true,
  },
  {
    id: 9,
    name: "Hadi",
    department: "Marketing",
    salary: 9500000,
    active: false,
  },
  {
    id: 10,
    name: "Ira",
    department: "IT",
    salary: 10000000,
    active: true,
  }
];

function addEmployee(employee) {
    employees.push(employee);
    return employees;
}

function deleteEmployee(id) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1)
    } else {
        return null;
    }
    return employees;
}

function updateSalary(id, newSalary) {
    const employee = employees.find(employee => employee.id === id);
    if (employee) {
        employee.salary = newSalary;
    } else {
        return null;
    }
    return employees;
}

function toggleActive(id) {
    const employee = employees.find(employee => employee.id === id);
    employee.active = !employee.active;
    return employees;
}

function getDashboard() {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(employee => employee.active).length;
    const inActiveEmployees = employees.filter(employee => !employee.active).length;
    const totalSalary = employees.reduce((totalOfSalary, employee) => totalOfSalary + employee.salary, 0);
    const averageSalary = totalSalary / totalEmployees;
    const highestSalaryEmployee = employees.filter(employee => employee.salary > averageSalary);
    return {
        totalEmployees,
        activeEmployees,
        inActiveEmployees,
        totalSalary,
        averageSalary,
        highestSalaryEmployee};
}

function searchEmployee(keyword) {
    const filteredEmployees = employees.filter(employee => employee.name.includes(keyword));
    return filteredEmployees;
}

// function getDepartmentSummary() {
//     const departmentSummary = employees.reduce((summary, employee) => {
//         const department = employee.department;
//         const totalEmployees = summary[department] ? summary[department].employees + 1 ;
//         const totalSalary = summary[department] ? summary[department].salary + employee.salary : ;
//         summary[department] = { employees: totalEmployees, salary: totalSalary };
//         return summary;
//     }, )
// }

