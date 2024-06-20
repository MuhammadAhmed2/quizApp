// const firebaseConfig = {
//     apiKey: "AIzaSyCB_uJNSx7kVQ61IrhKHDz6UAfvNOHURXw",
//     authDomain: "the-edu-master.firebaseapp.com",
//     projectId: "the-edu-master",
//     storageBucket: "the-edu-master.appspot.com",
//     messagingSenderId: "606337433392",
//     appId: "1:606337433392:web:7619557b90c723871892f5",
//     measurementId: "G-2PSYTBX4LB"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();


let loginName = document.querySelector('#registerName');
let loginEmail = document.querySelector('#loginEmail');
let loginPassword = document.querySelector('#loginPassword');
let loginButton = document.querySelector('#loginButton');
let err = document.querySelector('.alert')


// importing User data
let dataBase = JSON.parse(localStorage.getItem('userData'));
if (dataBase === null) { dataBase = [] }
console.log(dataBase);


const userVerify = () => {
    console.log('function is runnign');
    const user = dataBase.filter(function (element) {
        return element.userEmail === loginEmail.value;
    });
    console.log(user);
    let stinfiedData = JSON.stringify(user);
    localStorage.setItem('user', stinfiedData);
    db.collection('user').doc(user).set(user)
        .then(() => {
            console.log('User data saved to Firestore');
        })
        .catch(error => {
            console.error('Error saving user data:', error);
        });

    if (user.length !== 0 && user[0].userPassword === loginPassword.value) {
        err.style.display = "none";
        window.location.href = './app/userpanel.html';
    } else {
        err.style.display = "block";
    }

};



loginButton.addEventListener("click", (event) => {
    event.preventDefault()
    userVerify();
});