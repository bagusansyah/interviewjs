const users = [
  {
    id: 1,
    name: "Bagus",
    age: 20,
    role: "admin",
    salary: 8000000,
    active: true,
  },
  {
    id: 2,
    name: "Budi",
    age: 16,
    role: "user",
    salary: 3000000,
    active: false,
  },
  {
    id: 3,
    name: "Andi",
    age: 25,
    role: "admin",
    salary: 12000000,
    active: true,
  },
  {
    id: 4,
    name: "Rina",
    age: 19,
    role: "user",
    salary: 5000000,
    active: true,
  },
  {
    id: 5,
    name: "Sinta",
    age: 30,
    role: "admin",
    salary: 15000000,
    active: false,
  },
];

function getActiveAdminNames() {
    const activeAdmins = users.filter(user => user.role === "admin" && user.active);
    const activeAdminNames = activeAdmins.map(user => user.name);
    return activeAdminNames;
}

function getTotalActiveAdminSalary() {
    const activeAdmins = users.filter(user => user.role === "admin" && user.active);
    const totalSalary = activeAdmins.reduce((totalAdminSalary, currentUser) => totalAdminSalary + currentUser.salary, 0);
    return totalSalary;
}

function getHighestPaidUser() {
    const highestPaidUser = users.reduce((highestUser, currentUser) => {
        return currentUser.salary > highestUser.salary ? currentUser : highestUser;
    }, users[0]);
    return highestPaidUser;
}

function getInactiveUsers() {
    const inactiveUsers = users.filter(user => !user.active);
    return inactiveUsers;
}

function getAverageSalary() {
    const averageSalary = users.reduce((totalSalary, currentUser) => totalSalary + currentUser.salary, 0) / users.length;
    return averageSalary;
}