let username = document.getElementById('username'),
    userid = document.getElementById('userid'),
    country = document.getElementById('country'),
    language = document.getElementById('language')
submit = document.getElementById('submit')


let arrayOfUsers 

let Mode = "create"

let TmpId  // temporary variable to save the Users id 

// let's save informations in localstorage

if(localStorage.arrayOfUsers != null){
    arrayOfUsers = JSON.parse(localStorage.getItem('arrayOfUsers'))
}
else{
     arrayOfUsers = []
}



submit.addEventListener('click', function (e) {
    if(Mode === "create"){

        let UsersObject = {
            username: username.value,
            userid: userid.value,
            country: country.value,
            language: language.value
        }
        arrayOfUsers.push(UsersObject)
        localStorage.setItem('arrayOfUsers', JSON.stringify(arrayOfUsers))
        console.log(arrayOfUsers)
        DispayInfos()
        clearText()
    }
    else{
        submit.textContent = "Update"
        UpdateUsers(TmpId)  // here we replace id with TmpId var because id is local variable
        DispayInfos()
        submit.textContent = "Create"
        Mode = "create"
    }
    e.preventDefault()
})

function DispayInfos() {
    let table = ''
    for (let index = 0; index < arrayOfUsers.length; index++) {
        table += `
        <tr>
            <th scope="row">${index}</th>
            <td>${arrayOfUsers[index].username}</td>
            <td>${arrayOfUsers[index].userid}</td>
            <td>${arrayOfUsers[index].country}</td>
            <td>${arrayOfUsers[index].language}</td>
            <td>
                <button class="btn btn-warning" onclick="UpdateUsers(${index})">Edit</button>
                <button class="btn btn-danger" onclick="DeleteUsers(${index})">Remove</button>
            </td>
        </tr>
        `
        document.getElementById('tbody').innerHTML = table
    }
}
function clearText() {
        username.value = "",
        userid.value = "",
        country.value = "",
        language.value = ""
}


// to delete an Users we should identify him by id

function DeleteUsers(id) {
    arrayOfUsers.splice(id, 1) // deleting 
    localStorage.setItem('arrayOfUsers', JSON.stringify(arrayOfUsers)) // update localstorage
    DispayInfos() // displaying informations after deleting
}



function UpdateUsers(id) {
    TmpId = id
    Mode = "update"
    submit.textContent = "Update"
    // also to modify an Users infos we sould find him by id 


    let UsersObject = {
        username: username.value,
        userid: userid.value,
        country: country.value,
        language: language.value
    }
       username.value = arrayOfUsers[id].username
       userid.value = arrayOfUsers[id].userid
       country.value = arrayOfUsers[id].country
       language.value = arrayOfUsers[id].language

       arrayOfUsers[TmpId] = UsersObject
        localStorage.setItem('arrayOfUsers', JSON.stringify(arrayOfUsers))
}


DispayInfos()


