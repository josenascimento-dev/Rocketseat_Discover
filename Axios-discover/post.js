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
//addNewUser()
getUsers()

