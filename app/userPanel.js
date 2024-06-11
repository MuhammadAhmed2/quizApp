let userPronoun = document.querySelector('.userName');
let coursesDiv = document.querySelector('.courses');
let score = document.querySelector('.score');

// importing User data
let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

const coursesArr = [
    {
        courseName: "JavaScript Course",
        courseThumbnail: 'https://i.ytimg.com/vi/ER9SspLe4Hg/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR',
        courseDescription: "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this.",
        language: 'Urdu/Hindi',
        instructor: 'Code With Harry',
        price: 0
    },
    {
        courseName: "Beginner's Python Tutorials",
        courseThumbnail: 'https://i.ytimg.com/vi/fqF9M92jzUo/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME',
        courseDescription: "This Python for Everybody course is designed for beginners and intermediate programmers. It covers the basics of Python, including syntax, data structures, and libraries, and moves on to more advanced topics.",
        language: 'Urdu/Hindi',
        instructor: 'Harry',
        price: 0
    },
    {
        courseName: "ReactJS Tutorial",
        courseThumbnail: 'https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS',
        courseDescription: "This ReactJS tutorial is aimed at helping beginners get started with React. The course covers components, state, props, lifecycle methods, and more. By the end of this tutorial, you will be able to build a dynamic web application using ReactJS.",
        language: 'English',
        instructor: 'Academind',
        price: 0
    },
    {
        courseName: "Photoshop for Beginners",
        courseThumbnail: 'https://i.ytimg.com/vi/rL9iKGkgOHI/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLW-zSkCnZ-gA5Jn6gZtUa6-aG0OoRZyb6',
        courseDescription: "Hello everyone. This is my new series of Photoshop for beginners in Urdu / Hindi language. Although this is for beginners but even seasoned Photoshop user can also benefit with these videos as this is the most detailed course on Photoshop available in Urdu / Hindi Language.",
        language: 'Urdu/Hindi',
        instructor: 'Imran Ali Dina',
        price: 0
    },
    {
        courseName: "Web Development Full Course",
        courseThumbnail: 'https://i.ytimg.com/vi/Q33KBiDriJY/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agD7DlEwC5qlv_vJskHh0ol',
        courseDescription: "This Web Development Full Course covers HTML, CSS, JavaScript, and more. Perfect for beginners who want to learn how to build websites from scratch.",
        language: 'English',
        instructor: 'Code With Harry',
        price: 0
    },
    {
        courseName: "Machine Learning Course",
        courseThumbnail: 'https://i.ytimg.com/vi/GwIo3gDZCVQ/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLZoTAELRMXVOIr1lT9MLyrFfBzHdE8E93',
        courseDescription: "This Machine Learning course covers various machine learning algorithms and techniques. Ideal for intermediate programmers who want to delve into machine learning.",
        language: 'English',
        instructor: 'Krish Naik',
        price: 0
    },
    {
        courseName: "Data Structures and Algorithms",
        courseThumbnail: 'https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PL2SOU6wwxB0v1kQTpqpuuF7_UgNQd-2yM',
        courseDescription: "Learn Data Structures and Algorithms in this comprehensive course. Topics include arrays, linked lists, stacks, queues, trees, and more.",
        language: 'English',
        instructor: 'mycodeschool',
        price: 0
    },
    {
        courseName: "HTML and CSS Crash Course",
        courseThumbnail: 'https://i.ytimg.com/vi/mU6anWqZJcc/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',
        courseDescription: "This crash course covers HTML and CSS basics, perfect for beginners who want to learn web development.",
        language: 'English',
        instructor: 'The Net Ninja',
        price: 0
    },
    {
        courseName: "Java Programming",
        courseThumbnail: 'https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4',
        courseDescription: "Java Programming course covering basics to advanced concepts, suitable for beginners to intermediate learners.",
        language: 'English',
        instructor: 'Telusko',
        price: 0
    },
    {
        courseName: "Kotlin for Android Development",
        courseThumbnail: 'https://i.ytimg.com/vi/F9UC9DY-vIU/maxresdefault.jpg',
        youtubePlaylistLink: 'https://www.youtube.com/playlist?list=PLlxmoA0rQ-Lw6tAs2fGFuXGP13-dWdKsB',
        courseDescription: "Learn Kotlin for Android Development in this comprehensive course. Covers everything from basics to advanced topics.",
        language: 'English',
        instructor: 'freeCodeCamp.org',
        price: 0
    }
];

const courseData = (course) => {
    let arr = [];
    arr.push(course);
    console.log(arr);
    let stinfiedData = JSON.stringify(arr);
        localStorage.setItem('courseData', stinfiedData);
        window.location.href = './coursePage.html';
}

userPronoun.innerHTML = user[0].userName;
score.innerHTML = `Your Over All Score is <span style="font-weight: 800;">${user[0].overallScore}/150</span>`;

for (let i = 0; i < coursesArr.length; i++) {
    let course = coursesArr[i];
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    
    courseDiv.innerHTML = `
        <img style="max-width:100%;" src="${course.courseThumbnail}" alt="${course.courseName}">
        <div class="text">
            <h2>${course.courseName}</h2>
            <h4>Instructor: ${course.instructor}</h4>
            <h4>Course Description:</h4>
            <p>${course.courseDescription}</p>
            <h4 class="price">Price: ${course.price === 0 ? 'Free' : '$' + course.price}</h4>
            <button style="border:none;"><a class="watch-btn">Start Learning</a></button>
        </div>
    `;

    let watchBtn = courseDiv.querySelector('.watch-btn');
    watchBtn.addEventListener('click', () => courseData(course));

    coursesDiv.appendChild(courseDiv);
}

// ${course.youtubePlaylistLink}

