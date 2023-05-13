const form = document.querySelector('form');
const tableBody = document.getElementById('table-body');
const updateContainer = document.getElementById('update-container');
const updateNameInput = document.getElementById('update-name-input');
const updateIdInput = document.getElementById('update-userid-input');
const updateCountryInput = document.getElementById('update-country-input');
const updateLanguageInput = document.getElementById('update-language-input');
const updatePasswordInput = document.getElementById('update-password-input');
const updateBtn = document.getElementById('update-btn');
const cancelBtn = document.getElementById('cancel-btn');

let users = [];

// Retrieve data from local storage
if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
  renderUsers(users);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('name').value;
  const userId = document.getElementById('id').value;
  const country = document.getElementById('country').value;
  const language = document.getElementById('languages').value;
  const password = document.getElementById('pass').value;

  const user = { username, userId, country, language, password };
  users.push(user);

  // Save data to local storage
  localStorage.setItem('users', JSON.stringify(users));

  renderUsers(users);

  form.reset();
});

function renderUsers(users) {
  tableBody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    const usernameCell = document.createElement('td');
    const userIdCell = document.createElement('td');
    const countryCell = document.createElement('td');
    const languageCell = document.createElement('td');
    const passwordCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    usernameCell.innerText = user.username;
    userIdCell.innerText = user.userId;
    countryCell.innerText = user.country;
    languageCell.innerText = user.language;
    passwordCell.innerText = user.password;
    editButton.innerText = 'Edit';
    deleteButton.innerText = 'Delete';

    editButton.addEventListener('click', () => editUser(user));
    deleteButton.addEventListener('click', () => deleteUser(user));

    row.appendChild(usernameCell);
    row.appendChild(userIdCell);
    row.appendChild(countryCell);
    row.appendChild(languageCell);
    row.appendChild(passwordCell);
    row.appendChild(editButton);
    row.appendChild(deleteButton);

    tableBody.appendChild(row);
  });
}

function editUser(user) {
  updateNameInput.value = user.username;
  updateIdInput.value = user.userId;
  updateCountryInput.value = user.country;
  updateLanguageInput.value = user.language;
  updatePasswordInput.value = user.password;

  updateContainer.style.display = 'block';

  updateBtn.addEventListener('click', () => {
    user.username = updateNameInput.value;
    user.userId = updateIdInput.value;
    user.country = updateCountryInput.value;
    user.language = updateLanguageInput.value;
    user.password = updatePasswordInput.value;

    localStorage.setItem('users', JSON.stringify(users));
    renderUsers(users);

    updateContainer.style.display = 'none';
  });

  cancelBtn.addEventListener('click', () => {
    updateContainer.style.display = 'none';
  });
}

function deleteUser(user) {
  const index = users.indexOf(user);
  users.splice(index, 1);

  localStorage.setItem('users', JSON.stringify(users));
  renderUsers(users);
}
