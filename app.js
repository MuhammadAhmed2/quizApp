let loginName = document.querySelector('#registerName');
let loginEmail = document.querySelector('#loginEmail');
let loginPassword = document.querySelector('#loginPassword');
let loginButton = document.querySelector('#loginButton');
let err = document.querySelector('.alert')

// importing User data
let dataBase = JSON.parse(localStorage.getItem('userData'));
console.log(dataBase);

const userVerify = ()=>{
    console.log('function is runnign');
    const user = dataBase.filter(function (element) {
        return element.userEmail === loginEmail.value;
    });
    console.log(user[0].userPassword);
    console.log('email: ' + user.length !== 0);
    console.log('pasword: ' + user[0].userPassword === loginPassword.value);
    if (user.length !== 0 && user[0].userPassword === loginPassword.value) {
        err.style.display = "none";
        window.location.href = './app/userpanel.html';
    }else{
        err.style.display = "block";
    }
    
};



loginButton.addEventListener("click", (event) => {
    event.preventDefault()
    userVerify();
});