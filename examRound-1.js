const users = [
  { id: 1, name: "Bagus", age: 20, role: "admin", salary: 8000000 },
  { id: 2, name: "Budi", age: 16, role: "user", salary: 3000000 },
  { id: 3, name: "Andi", age: 25, role: "admin", salary: 12000000 },
  { id: 4, name: "Rina", age: 19, role: "user", salary: 5000000 },
];

function userById() {
    return users.find(users => users.id === 3);
}

function userByRole() {
    return users.filter(users => users.role === "admin");
}

function userByName() {
    return users.map(users => users.name);
}

function userBySalary() {
    return users.reduce((totalSalary, currentUser) => totalSalary + currentUser.salary, 0);
}

function userByAdmin() {
    const result = users.filter(users => users.role === "admin");
    return result.map(result => result.name);
}