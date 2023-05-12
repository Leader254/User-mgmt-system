// const form = document.querySelector('form');
// const itemList = document.querySelector('#item-list');

// let userList = [];

// form.addEventListener('submit', addItem);

// function addItem(e) {
//   e.preventDefault();

//   const name = document.querySelector('#name').value;
//   const id = document.querySelector('#id').value;
//   const country = document.querySelector('#country').value;
//   const language = document.querySelector('#languages').value;

//   const user = {
//     name: name,
//     id: id,
//     country: country,
//     language: language
//   };

//   userList.push(user);

//   displayItems(userList);

//   form.reset();
// }

// function displayItems(userList) {
//   itemList.innerHTML = '';

//   for (let i = 0; i < userList.length; i++) {
//     const li = document.createElement('li');
//     li.className = 'user-item';

//     const nameSpan = document.createElement('span');
//     nameSpan.className = 'name';
//     nameSpan.appendChild(document.createTextNode(userList[i].name));

//     const idSpan = document.createElement('span');
//     idSpan.className = 'id';
//     idSpan.appendChild(document.createTextNode(userList[i].id));

//     const countrySpan = document.createElement('span');
//     countrySpan.className = 'country';
//     countrySpan.appendChild(document.createTextNode(userList[i].country));

//     const languageSpan = document.createElement('span');
//     languageSpan.className = 'language';
//     languageSpan.appendChild(document.createTextNode(userList[i].language));

//     const updateBtn = document.createElement('button');
//     updateBtn.className = 'update-btn';
//     updateBtn.appendChild(document.createTextNode('Update'));

//     const deleteBtn = document.createElement('button');
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.appendChild(document.createTextNode('Delete'));

//     li.appendChild(nameSpan);
//     li.appendChild(idSpan);
//     li.appendChild(countrySpan);
//     li.appendChild(languageSpan);
//     li.appendChild(updateBtn);
//     li.appendChild(deleteBtn);

//     itemList.appendChild(li);

//     deleteBtn.addEventListener('click', () => {
//       userList.splice(i, 1);
//       displayItems(userList);
//     });

//     updateBtn.addEventListener('click', () => {
//       document.querySelector('#name').value = userList[i].name;
//       document.querySelector('#id').value = userList[i].id;
//       document.querySelector('#country').value = userList[i].country;
//       document.querySelector('#languages').value = userList[i].language;
//       userList.splice(i, 1);
//       displayItems(userList);
//     });
//   }
// }


const form = document.querySelector('form');
      const tableData = document.getElementById('table-data');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('name').value;
        const userId = document.getElementById('id').value;
        const country = document.getElementById('country').value;
        const language = document.getElementById('languages').value;
        const password = document.getElementById('pass').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${username}</td>
          <td>${userId}</td>
          <td>${country}</td>
          <td>${language}</td>
          <td>${password}</td>
        `;

        tableData.appendChild(newRow);

        form.reset();
      });
