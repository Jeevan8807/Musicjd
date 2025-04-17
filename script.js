let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.querySelector("h1");
let songArtist = document.querySelector("p");
let songImage = document.querySelector(".song");

// 🎵 Playlist Array
let playlist = [
    {
        title: "Amhi Veer Jhunzaar",
        artist: "Chinmay Mandlekar | Avadhoot Gandhi | Devdutta Manisha Baji",
        src: "Amhi Veer Jhunzaar Sher Shivraj(PagalWorld).mp3",
        img: "sher shivrajjpg.jpg"
    },
    {
        title: "Alone",
        artist: "Alan Walker | Alone",
        src: "Alone(PaglaSongs).mp3",
        img: "https://i.scdn.co/image/ab67616d0000b273962ff13b2a66f49da56158fe"
    },
    {
        title: "One Direction",
        artist: " Liam Payne, Harry Styles,",
        src: "One-Direction-What-Makes-You-Beautiful-via-Naijafinix.com_.mp3",
        img: "https://i1.sndcdn.com/avatars-000236396307-94xf3g-t1080x1080.jpg"
    },
    {
        title: "Aashaayen",
        artist: "Salim–Sulaiman, Salim Merchant,,",
        src: "01. Aashaayen.mp3",
        img: "https://i.ytimg.com/vi/cXJa2UeerzQ/sddefault.jpg"
    }, 
    {
        title: "One Direction",
        artist: " Liam Payne, Harry Styles,",
        src: "One-Direction-What-Makes-You-Beautiful-via-Naijafinix.com_.mp3",
        img: "https://i1.sndcdn.com/avatars-000236396307-94xf3g-t1080x1080.jpg"
    }
];

let currentSong = 0;

// 🎧 Load song details
function loadSong(index) {
    song.src = playlist[index].src;
    songTitle.textContent = playlist[index].title;
    songArtist.textContent = playlist[index].artist;
    songImage.src = playlist[index].img;
    song.load();
    // song.play();


    //Reset the play/pause icon to Play
    ctrlIcon.classList.add("fa-play");
     ctrlIcon.classList.remove("fa-pause");
    

}


// ▶️ Play / Pause
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// ▶️ Play and update icon
function playSong() {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

// ⏭ Next song
function nextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    loadSong(currentSong);
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

// ⏮ Previous song
function prevSong() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    loadSong(currentSong);
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");   
}

// 🎚️ Progress Bar Update
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

// ⏩ Seek in song
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    // playSong();
};

// ⏭ Auto next on end
song.addEventListener("ended", nextSong);

// 🚀 Load the first song initially
window.addEventListener("load", () => {
    loadSong(currentSong);
});
