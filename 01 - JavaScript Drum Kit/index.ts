document.addEventListener('keydown',function(event:KeyboardEvent){
    HandleKeyDown(event.keyCode)
});

document.addEventListener('keyup',function(event:KeyboardEvent){
    HandleKeyUp(event.keyCode)
});

const HandleKeyDown = (keyCode: number): void => {
    const [tile, audio] = FetchComponents(keyCode)
    HandlePlaying(tile, audio, keyCode)
}

const HandleKeyUp = (keyCode: number): void => {
    const [tile, audio] = FetchComponents(keyCode)
    HandleMuted(tile, keyCode)
}

const FetchComponents = (keyCode: number): [HTMLDivElement | null, HTMLAudioElement | null] => {
    const tile: HTMLDivElement | null = document.querySelector(`div[data-key="${keyCode}"]`)
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${keyCode}"]`)
 return [tile, audio]
}

const HandlePlaying = (tile: HTMLDivElement | null, audio: HTMLAudioElement | null, keyCode: number): void => {
    if (tile && audio){
        let hasBeenPlayed: boolean = isPlayedStatus[keyCode]
        if (!hasBeenPlayed){
            tile.classList.add('playing')
            PlaySound(audio)
            isPlayedStatus[keyCode] = true
        }
    }
}

const HandleMuted = (tile: HTMLDivElement | null, keyCode: number): void => {
    if (tile){
        isPlayedStatus[keyCode] = false
        tile.classList.remove('playing')
    }
}

const PlaySound = (audio: HTMLAudioElement): void => {
        audio.currentTime = 0
        audio.play()
}

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