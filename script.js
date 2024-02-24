let formE1 = document.querySelector("form")
let StoreData = document.querySelector(".store-data")

formE1.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = event.target.name.value
    let useremail = event.target.email.value
    let userphone = event.target.number.value
    let usermessage = event.target.message.value
    let checkStatus = 0;

    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []

    userdata.forEach((checkData) => {
        if (checkData.name == username || checkData.email == useremail || checkData.phone == userphone) {
            checkStatus = 1;
        }else{
            alert("Register Sucessfully")
        }

        if (checkStatus == 1) {
            alert("Data Already Register")
            event.target.reset()
        }else{
            userdata.push({
                "name": username,
                "email": useremail,
                "phone": userphone,
                "message": usermessage
            })
        
            localStorage.setItem("userdetails", JSON.stringify(userdata))
            event.target.reset()
            displayData()
        }
    })

    
})

function displayData() {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []
    let finalData = '';

    userdata.forEach((data, index) => {
        finalData += `<div class="data-container">
        <span onclick = removeData(${index})>&times;</span>
        <h3>Name</h3>
        <p>${data.name}</p>
        <h3>Email</h3>
        <p>${data.email}</p>
        <h3>Phone</h3>
        <p>${data.phone}</p>
        <h3>Message</h3>
        <p>${data.message}</p>
    </div>`
    });
    StoreData.innerHTML = finalData;
}
displayData()

function removeData(index) {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []
    userdata.splice(index, 1)

    localStorage.setItem("userdetails", JSON.stringify(userdata))
    displayData()
}



