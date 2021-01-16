// el parametro config es un objeto que trae el objeto y los plugins que recibe este objeto:
// { el: video, 
//   plugins: [new Autoplay()] 
// }

// Recuerde que acá solamente están las definiciones de las funciones, el archivo que ejecuta estas funciones es index.js

function MediaPlayer(config) {
    // creamos una variable a la que le asignamos el objeto HTml en este caso es Video que es una etiqueta html video
    this.media = config.el;
    // aca asignamos a la variable plugins todos los plugins que vienen por parametro, ejemplo
    // plugins: [new Autoplay()]
    this.plugins = config.plugins || [];
    // aca iniciamos los plugins asignados a la funcion mediaplayer
    this._initPlugins()
  }

  // Recuerde que a un objeto prototipo le asignamos las funciones con prototype

  MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    });
  }

  MediaPlayer.prototype.play = function() {
    this.media.play();
  };

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };

  MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
  };

  MediaPlayer.prototype.muteOnmute = function () {
    if(this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }

  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  export default MediaPlayer