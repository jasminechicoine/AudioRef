// collect all of the album covers into the variable//
const  albumCovers = document.querySelectorAll("album-art img"),
       theAudioEl = document.querySelector('audio'),
       playButton = document.querySelector('#playButton'),
       pauseButton = document.querySelector('#pauseButton'),
       rewindButton = document.querySelector('#rewindButton');
       volSlider = document.querySelector('#volumeSlider')

// tell audio elememt to play 
function loadAudio() {
    let currentSrc = 'audio/${this.dataset.trackref}.mp3';
    //set the new audio source
    theAudioEl.src = currentSrc;
    //load the new audio source
    theAudioEl.load();

    //tell the audio elemet to play
    playAudio();
}
function playAudio() { theAudioEl.play(); }
function restartAudio() { theAudioEl.currentTime = 0; }
function pauseAudio() { theAudioEl.pause(); }

function setVolume() {


    console.log(this.value);
    
    // devide the value to get a floating point number between 0 and 1
    theAudioEl.volume = this.value/100: 

}
// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener ('click', loadAudio));

//add event handling for the custom controls
playButton.addEventListener('click', playAudio);
rewindButton.addEventListener('click', restartAudio)
pauseButton.addEventListener('click', pauseAudio)

volSlider.addEventListener('change', setVolume);