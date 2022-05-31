const month = document.getElementById('month');
const loading = document.getElementById('loading');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const currentYear = new Date().getFullYear(); // current Year
const quitTime = new Date(`August 10 ${currentYear} 00:00:00`);
////////////////////////////////////////////////////////
const muteIcon = document.getElementById('mute-icon');
const audio = document.querySelector('audio'); //audio
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const addVolume = document.getElementById('addVolume');
const removeVolume = document.getElementById('removeVolume');
const mute = document.getElementById('mute');
const audioControls = document.getElementById('audio-controls');



let isPlaying = false;

// Background year refresh
month.textContent = "August 10 ";


function updateCountdown() {
    const currentTime = new Date();
    const diff = quitTime - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    // total hours in a year % 24 = hoursleft in day
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;

}

// Remove loading spinner after 1 second and display time

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

setInterval(updateCountdown, 1000)


// audio controls

play.addEventListener('click', () => {
    audio.play();
    isPlaying = true;
    play.style.display = 'none';
    pause.style.display = 'block';
})

pause.addEventListener('click', () => {
    audio.pause();
    isPlaying = false;
    play.style.display = 'block';
    pause.style.display = 'none';
})

addVolume.addEventListener('click', () => {
    if(audio.volume < 1) {
    audio.volume += 0.1;
    }else{
        audio.volume = 1;
    }
})

removeVolume.addEventListener('click', () => {
    if(audio.volume > 0.1) {
    audio.volume -= 0.1;
    }else{
        audio.volume = 0;
    }
})

mute.addEventListener('click', () => {
    if(!audio.muted) {
        audio.muted = true;
        mute.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
    }else if(audio.muted){
        audio.muted = false;
        mute.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
    }
})