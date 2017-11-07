const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playToggle = player.querySelector('.toggle');
const muteToggle = player.querySelector('.sound');
const soundToggle = player.querySelector('.player__slider');
const skipToggles = player.querySelectorAll('.skip');
const fullscreen = player.querySelector('.fullscreen');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

//1 play function
function togglePlay(){
	if(video.paused){
		video.play();
		playToggle.textContent = '❚❚'
	}else{
		video.pause();
		playToggle.textContent = '▶'
	}
}

//2 sound
function toggleSound(){
	video[this.name] = this.value;
}

function toggleMute(){
	if(video.volume === '1' || video.volume === '0.5' || soundToggle.value === '1' || soundToggle.value === '0.5'){
	video.volume = '0';
	soundToggle.value = '0';
	muteToggle.textContent = '⊘';
	}else{
		video.volume = '1';
		soundToggle.value = '1';
		muteToggle.textContent = '🔊';
	}
}

//3.skip buttons
function toggleSkip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

//4.fullscreen
function handleFullscreen(){
	if (!document.fullscreenElement && 
   !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  
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

//5. progress bar
function handleProgress(){
	const percentOfVideo = (video.currentTime / video.duration) * 100;
	progressFilled.style.flexBasis = `${percentOfVideo}%`; 
}

//6.scrub
function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

//event listeners
//1
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
playToggle.addEventListener('click', togglePlay);
//2
soundToggle.addEventListener('change', toggleSound);
soundToggle.addEventListener('mousemove', toggleSound);
muteToggle.addEventListener('click', toggleMute);
//3
skipToggles.forEach(toggle => toggle.addEventListener('click', toggleSkip));
//4
fullscreen.addEventListener('click', handleFullscreen);
//5
progress.addEventListener('click', scrub);
//6
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));