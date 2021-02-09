import MediaPlayer from '../mediaPlayer'

class Autoplay {
    constructor() { }
    run(player:MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true
        }

        player.play()
    }
}


export default Autoplay