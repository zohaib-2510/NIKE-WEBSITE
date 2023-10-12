const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

const name1 = document . getElementById("name")
const password = document . getElementById("password")
// function for checking username and password

function authentication(username,password){
    if(username && password){
        return true
    }else{
        return false
    }
}
authentication(username,password)