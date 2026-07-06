const url = "https://jsonplaceholder.typicode.com/users";

const response = await fetch(url);
const users = await response.json();

// Challenge 2
const name = users.map(user => user.name);
console.log(
    `==== USERS ====\n\n${name.join("\n")}}`
)

// Challenge 3
const id = users.map(user => user.id);
const email = users.map(user => user.email);
const company = users.map(user => user.company);
const companyName = company.map(company => company.name);
const biz = users.filter(user => user.email.includes(".biz"));
const nameMail = biz.map(user => user.name);
console.log(
    `==== USER ====
    \n\nID: ${id}
    \nEmail: ${email}
    \nCompany: ${company}
    \n\n\n`
)

// Challenge 4
console.log(
    `Total Users: ${users.length}`
)

// Challenge 5
console.log(
    `\n\n==== COMPANIES ====\n\n${companyName.join("\n")}`
)

// Challenge 6
console.log(
    `Users with .biz email
    \n- ${nameMail.join("\n- ")}`
)