// 1) Define the async function that will fetch and display data
async function fetchUserData() {
  // 2) Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3) Select the data container
  const dataContainer = document.getElementById('api-data');

  try {
    // 4) Fetch data and parse JSON
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    const users = await response.json();

    // 5) Clear the loading message
    dataContainer.innerHTML = '';

    // 6) Create and append the user list
    const userList = document.createElement('ul');
    users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // 7) Error handling
    console.error('Failed to fetch user data:', error);
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// 8) Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

