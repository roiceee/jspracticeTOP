function removeTransition(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
    
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('keyup', removeTransition));
  document.addEventListener('keydown', playSound);
  document.addEventListener('keyup', removeTransition)