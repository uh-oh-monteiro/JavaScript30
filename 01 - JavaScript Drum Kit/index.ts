
const HandleKeyPress = (keyCode: number, isPlayed: boolean): void => {

    let tile: HTMLDivElement | null = document.querySelector(`div[data-key="${keyCode}"]`)
    let hasBeenPlayed: boolean = isPlayedStatus[keyCode]
    if (tile){
        if (isPlayed == true && hasBeenPlayed == false){
            tile.classList.add('playing')
            PlaySound(keyCode)
            isPlayedStatus[keyCode] = true
        }
        if (isPlayed == false){
            tile.classList.remove('playing')
            isPlayedStatus[keyCode] = false
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

interface NumberBooleanDictionary {
    [key: number]: boolean;
}

let isPlayedStatus: NumberBooleanDictionary = {
    65: false,
    83: false,
    68: false,
    70: false,
    71: false,
    72: false,
    74: false,
    75: false,
    76: false,
}