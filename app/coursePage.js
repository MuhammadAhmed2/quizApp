let userPronoun = document.querySelector('.userName');
let courseName = document.getElementById('courseName');
let videoTitle = document.getElementById('videoTitle');
let user = JSON.parse(localStorage.getItem('user'));
console.log(user);
let courseData = JSON.parse(localStorage.getItem('courseData'));
console.log(courseData);

userPronoun.innerHTML = user[0].userName;
courseName.innerHTML = courseData[0].courseName;
const headerElement = document.querySelector('.courseHeader');
headerElement.style.backgroundImage = `url(${courseData[0].courseThumbnail})`;

let player;
let currentVideoIndex = 0;
const playlistId = courseData[0].youtubePlaylistLink.split('list=')[1]; // Extract the playlist ID from the URL


function domUpdate(vidData) {
    videoTitle.innerHTML = vidData.snippet.title
};

function fetchPlaylistVideos(playlistId) {
    return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=AIzaSyCB_uJNSx7kVQ61IrhKHDz6UAfvNOHURXw`)
        .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            vidData  = data;
            console.log('Data:', data);
            // data.items.map(item => item.snippet.resourceId.videoId);
            return data
        });
};


fetchPlaylistVideos(playlistId).then(data => {
    const title = data.items.map(item => item.snippet.title);
    const playlist = data.items.map(item => item.snippet.resourceId.videoId);
    console.log(title);

    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        videoTitle.innerText = title[currentVideoIndex]
        player = new YT.Player('player', {  
            height: '450',
            width: '800',
            videoId: playlist[currentVideoIndex],
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };
    
    // The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // The API calls this function when the player's state changes.
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            playNextVideo();
        }
    }

    // Play the next video in the playlist.
    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex < playlist.length) {
            videoTitle.innerText = title[currentVideoIndex]
            player.loadVideoById(playlist[currentVideoIndex]);
        } else {
            currentVideoIndex = 0;
            videoTitle.innerHTML = title[currentVideoIndex];
            player.loadVideoById(playlist[currentVideoIndex]);
        }
    }

    // Event listener for the Next Video button
    document.getElementById('nextVideoBtn').addEventListener('click', function() {
        playNextVideo();
    });
});

