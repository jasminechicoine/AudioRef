// collect all of the album covers into the variable//
const  albumCovers = document.querySelectorAll("album-art img"),
       theAudioEl = document.querySelector('audio');

// tell audio elememt to play 
function playAudio() {
    // debug (test) your code at this point before you add anything else
    theAudioEl.play();
}

// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click, playAudio'));