document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const fileInput = document.getElementById('file-input');
  const fileInputBtn = document.getElementById('file-input-btn');
  const playlist = document.getElementById('playlist');

  playBtn.addEventListener('click', function() {
      audio.play();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline';
  });

  pauseBtn.addEventListener('click', function() {
      audio.pause();
      playBtn.style.display = 'inline';
      pauseBtn.style.display = 'none';
  });

  fileInputBtn.addEventListener('click', function() {
      fileInput.click();
  });

  fileInput.addEventListener('change', function(event) {
      const files = event.target.files;
      console.log('Files selected:', files);
      for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileURL = URL.createObjectURL(file);
          console.log('File:', file);
          addToPlaylist(file, fileURL);
      }
  });

  function addToPlaylist(file, fileURL) {
      const listItem = document.createElement('div');
      listItem.classList.add('playlist-item');
      listItem.textContent = file.name;
      listItem.addEventListener('click', function() {
          audio.src = fileURL;
          audio.play();
          playBtn.style.display = 'none';
          pauseBtn.style.display = 'inline';
      });
      playlist.appendChild(listItem);
  }

  // Initially hide the pause button
  pauseBtn.style.display = 'none';
});
