const url="http://localhost:5500/api"
function getUsers(){
    axios.get(url, newUser)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, )
    .then(response => {
        console.log(response)
    })
  
    .catch(error => console.error(error))
}
const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then( response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
    name: "Rangel Teixeira",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"

}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then( response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(2)
//addNewUser()
updateUser(3, userUpdated)
getUsers()



