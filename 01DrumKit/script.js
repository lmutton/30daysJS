function playSound(e){
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  //set audio to equal specific keyCode, so that when we run the function with eventlistener 'keydown'
  //that specific audio will be played.
  //the same goes for the div class key but will have the CSS class of .playing added to it.
  if (!audio) return; //if there is no audio i.e a key that isnt present, stop the function.
  key.classList.add('playing');
  //key div to add class .playing from CSS
  audio.currentTime = 0; //each keydown sets audio time back to 0seconds
  audio.play(); //play audio
}

function removeTransition (e){
  if (e.propertyName !== 'transform') return;
  //if the propertyName of the CSS class does not equal transform, skip it.
  e.target.classList.remove('playing');
  //if it does, then target the class .playing and remove it
}


const keys = Array.from(document.querySelectorAll('.key'));
//make an array of all the .key classes
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//for each of those, add event listener 'transitionend' with removeTransition function
window.addEventListener('keydown', playSound); //add eventlistener keydown and run function playsound
