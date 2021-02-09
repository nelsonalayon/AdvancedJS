// traemos las funciones mediaplayer y los plugins para ejecutar las funciones y aplicarlas a nuestra web

import MediaPlayer from "./mediaPlayer";
import Autoplay from "./plugins/Autoplay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new Autoplay(), new AutoPause()] });

const playButton: HTMLElement = document.querySelector('#playButton')
playButton.onclick = () => player.togglePlay()

const button: HTMLElement = document.querySelector("button");
button.onclick = () => player.togglePlay();
const buttonUnMuted = document.getElementById("mutedButton");
buttonUnMuted.onclick = () => player.muteOnmute();

// const mutedButton = document.querySelector('#muteButton')
// mutedButton.onclick = () => {
//   if(player.media.muted) {
//     player.unmute()
//   }else {
//     player.mute()
//   }
// }

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}
