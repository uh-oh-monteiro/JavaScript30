
const HandleKeyPress = (keyCode: number, isPlayed: boolean): void => {
    let tile: HTMLDivElement | null = document.querySelector(`div[data-key="${keyCode}"]`)
    if (tile){
        if (isPlayed == true){
            tile.classList.add('playing')
            PlaySound(keyCode)
        }
        else{
            tile.classList.remove('playing')
        }
    }    
    
}

const PlaySound = (keyCode: number): void => {
    let sound: HTMLAudioElement | null = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (sound){
        sound.currentTime = 0
        sound.play()
    }
}

document.addEventListener('keydown',function(event:KeyboardEvent){
    HandleKeyPress(event.keyCode, true)
});

document.addEventListener('keyup',function(event:KeyboardEvent){
    HandleKeyPress(event.keyCode,false)
});