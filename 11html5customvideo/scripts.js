//get all elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButton = player.querySelectorAll('[data-skip]');
const fullscreen = player.querySelector('.full-screen');
//functions
//1. function to play video
function togglePlay(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}
//2. change toggle look -use paused as play doesnt exist
function updateButton(){
  toggle.textContent = this.paused ? '▶' : '❚❚';
}

//3.skip buttons - use parseFloat to turn it from a string to a number
function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

//4.update ranges - get this.name lets you get the volume or playbackrate of video to equal its value;
function updateRange(){
  video[this.name] = this.value;
}

//5.handle bar progressBar
function updateProgress(){
  const percentofVideo = (video.currentTime / video.duration) * 100; //gets the % number
  progressBar.style.flexBasis = `${percentofVideo}%` //chnages the flexBasis to equal the %
}

//6.scrub(e)
function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//7.make fullscreen

function handleFullscreen(){
  if (!document.fullscreenElement &&    // alternative standard method
   !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
     if (video.requestFullscreen) {
      video.requestFullscreen();
      fullscreen.textContent = '🠺🠸';
     } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
      fullscreen.textContent = '🠺🠸';
     } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
      fullscreen.textContent = '🠺🠸';
     } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
      fullscreen.textContent = '🠺🠸';
     }
    } else {
     if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreen.textContent = '🠸🠺'
     } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      fullscreen.textContent = '🠸🠺'
     } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      fullscreen.textContent = '🠸🠺'
     } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      fullscreen.textContent = '🠸🠺'
     }
   }
}
//eventListeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);

skipButton.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', updateRange));
ranges.forEach(range => range.addEventListener('mousemove', updateRange));

progress.addEventListener('click', scrub);
let mouseDown = false;
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));

fullscreen.addEventListener('click', handleFullscreen);
