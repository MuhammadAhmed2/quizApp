let userPronoun = document.querySelector('.userName');
let coursesDiv = document.querySelector('.courses');

// importing User data
let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

const coursesArr = [
    {
        courseName: "javaScript Course",
        courseThumbnail: 'https://i.ytimg.com/vi/ER9SspLe4Hg/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR',
        courseDescription: "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this.",
        language: 'Urdu',
        instructor: 'Code With Harry',
        price: 0
    },
    {
        courseName: "Python for Everybody",
        courseThumbnail: 'https://i.ytimg.com/vi/8DvywoWv6fI/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agRSgFoJdaakJtHnO4OgVwP',
        courseDescription: "This Python for Everybody course is designed for beginners and intermediate programmers. It covers the basics of Python, including syntax, data structures, and libraries, and moves on to more advanced topics.",
        language: 'English',
        instructor: 'Dr. Chuck',
        price: 0
    },
    {
        courseName: "ReactJS Tutorial",
        courseThumbnail: 'https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME',
        courseDescription: "This ReactJS tutorial is aimed at helping beginners get started with React. The course covers components, state, props, lifecycle methods, and more. By the end of this tutorial, you will be able to build a dynamic web application using ReactJS.",
        language: 'English',
        instructor: 'Academind',
        price: 0
    }
];

userPronoun.innerHTML = user[0].userName;

let courseList = coursesArr.map((course)=>{
    coursesDiv.innerHTML += `
    <div class="course">
                <img style="max-width:100%;" src="${course.courseThumbnail}" alt="${course.courseName}">
                <div class="text">
                    <h2>${course.courseName}</h2>
                    <h4>Instructor: ${course.instructor}</h4>
                    <h4>Course Description:</h4>
                    <p>${course.courseDescription}</p>
                    <h4 class="price">Price: ${course.price === 0 ? 'Free' : '$' + course.price}</h4>
                    <a class="watch-btn" href="${course.youtubePlaylistLink}" target="_blank">Watch on YouTube</a>
                </div>
            </div>

 
`
});