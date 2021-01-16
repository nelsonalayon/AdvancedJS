  // traemos las funciones mediaplayer y los plugins para ejecutar las funciones y aplicarlas a nuestra web
  
  import MediaPlayer from './mediaPlayer.js'
  import Autoplay from './plugins/Autoplay.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins: [new Autoplay()] });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();
  const buttonUnMuted = document.getElementById('mutedButton')
  buttonUnMuted.onclick = () => player.muteOnmute()