// el parametro config es un objeto que trae el objeto y los plugins que recibe este objeto:
// { el: video, 
//   plugins: [new Autoplay()] 
// }

// Recuerde que acá solamente están las definiciones de las funciones, el archivo que ejecuta estas funciones es index.js

class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>
  constructor(config) {
    // creamos una variable a la que le asignamos el objeto HTml en este caso es Video que es una etiqueta html video
    this.media = config.el;
    // aca asignamos a la variable plugins todos los plugins que vienen por parametro, ejemplo
    // plugins: [new Autoplay()]
    this.plugins = config.plugins || [];
    // aca iniciamos los plugins asignados a la funcion mediaplayer
    this.initPlugins();
  }
  // Recuerde que a un objeto prototipo le asignamos las funciones con prototype
  private initPlugins() {
    // se construye un objeto player para hacer los getters y los setters 

    // getters and setters 
    // const player = {
    //   play: () => this.play(),
    //   pause: () => this.pause(),
    //   media: this.media,
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   }
    // };

    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  mute() {
    this.media.muted = true;
  }
  muteOnmute() {
    if (this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
}







  export default MediaPlayer