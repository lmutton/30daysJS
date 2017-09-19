function playSound(e){
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //set key to equal keyCode
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`); //set audio to equal keyCode
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0; //each keydown sets audio time back to 0
  audio.play(); //play audio
}

function removeTransition (e){
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); //add eventlistener keydown and run function playsound
