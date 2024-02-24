let formE1 = document.querySelector("form")
let StoreData = document.querySelector(".store-data")

formE1.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = event.target.name.value
    let useremail = event.target.email.value
    let userphone = event.target.number.value
    let usermessage = event.target.message.value
    // here add data in local stroage
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []
    // here check tha data is already register or not
    userdata.forEach((checkdata) => {
        if (checkdata.name == username || checkdata.email == useremail || checkdata.phone == userphone) {
            alert("already register")
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
            alert("Register SucessFully")
        }
    })
})

// here display data from local stroage
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

// here remove data from display or local stroage
function removeData(index) {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? []
    userdata.splice(index, 1)

    localStorage.setItem("userdetails", JSON.stringify(userdata))
    displayData()
}
