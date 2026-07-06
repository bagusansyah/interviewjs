async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
    } catch (error) {
        console.error(error.message);
    }
}