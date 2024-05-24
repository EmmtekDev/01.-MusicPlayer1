document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');

  playBtn.addEventListener('click', function() {
      audio.play();
  });

  pauseBtn.addEventListener('click', function() {
      audio.pause();
  });
});
