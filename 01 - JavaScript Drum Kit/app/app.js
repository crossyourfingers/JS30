const playSound = function(event) {
  const audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audioEl) return;
  const keyEl = document.querySelector(`div[data-key="${event.keyCode}"]`);
  keyEl.classList.add('playing');
  audioEl.currentTime = 0;
  audioEl.play();
}

const reversePlayingTransition = function(event) {
  if (event.propertyName !== 'transform') return
  event.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keyEls = Array.from(document.querySelectorAll('.key'));
keyEls.forEach(key => key.addEventListener('transitionend', reversePlayingTransition));