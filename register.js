let registerName = document.querySelector('#registerName');
let registerEmail = document.querySelector('#registerEmail');
let registerPassword = document.querySelector('#registerPassword');
let registerButton = document.querySelector('#registerButton');
let err = document.querySelector('.alert')




let dataBase;
let items = JSON.parse(localStorage.getItem('userData'));
if (items === null) {
    dataBase = [
        {
            userName: 'Ahmed',
            userEmail: 'exact.ahmed@gmail.com',
            userPassword: 'momo2006'
        },
    ];
    console.log(dataBase);
} else {
    dataBase = items;
    console.log(dataBase)
}





const storageFunction = () => {
    console.log('function  is runing');
    let filteredData = dataBase.filter((users) => { users.userEmail === registerEmail.value })
    console.log(filteredData);
    let userCheck = filteredData.find((o) => {
        console.log('find');
        if (o.userEmail === registerEmail.value) {
            console.log('condition 1');
            err.style.display = "block";
            return true;
        } else {
            console.log('condition 2');
            let user = {
                userName: registerName.value,
                userEmail: registerEmail.value,
                userPassword: registerPassword.value
            };


            dataBase.push(user);

            let stinfiedData = JSON.stringify(dataBase);
            localStorage.setItem('userData', stinfiedData);
            let userData = JSON.parse(localStorage.getItem('userData'));
            console.log(userData);
            err.style.display = "block";
            return false;
        }
    });


}


registerButton.addEventListener("click", (event) => {
    event.preventDefault()
    storageFunction()
});