const form = document.querySelector('form');
const tableData = document.getElementById('table-data');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // get form input values
  const username = document.getElementById('name').value;
  const userId = document.getElementById('id').value;
  const country = document.getElementById('country').value;
  const language = document.getElementById('languages').value;
  const password = document.getElementById('pass').value;

  // create new table row with input values
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${username}</td>
    <td>${userId}</td>
    <td>${country}</td>
    <td>${language}</td>
    <td>${password}</td>
  `;

  // append new row to table
  tableData.appendChild(newRow);

  // reset form
  form.reset();
});
