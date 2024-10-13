document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // This will fetch the data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading mesage
            dataContainer.innerHTML = '';

            // This creates and appends the user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            dataContainer.appendChild(userList);
        } catch (error) {
            // This will handle errors and display a failure message in response
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // This will call the fetchUserData function once the DOM has fully loaded
    fetchUserData();
});
