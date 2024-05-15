var isPlayedStatus: StringBooleanDictionary = {}

document.addEventListener('DOMContentLoaded', function() {
    GetPlayableKeys() 
})

document.addEventListener('keydown',function(event:KeyboardEvent){
    HandleKeyDown(`${event.keyCode}`)
});

document.addEventListener('keyup',function(event:KeyboardEvent){
    HandleKeyUp(`${event.keyCode}`)
});

const GetPlayableKeys = (): void => {
    const keysDiv = document.querySelector('.keys')
    const playableKeysDivs = keysDiv?.querySelectorAll(':scope > div')
    
    if (playableKeysDivs){
        const playableKeysDivsArray = Array.from(playableKeysDivs)
        const dataKeys = playableKeysDivsArray.map(div => div.getAttribute('data-key'));
        console.log(dataKeys)
        dataKeys.forEach(key =>{
            if (key){
                isPlayedStatus[key] = false
            }
        })
    }
}

const HandleKeyDown = (keyCode: string): void => {
    const [tile, audio] = FetchComponents(keyCode)
    HandlePlaying(tile, audio, keyCode)
}

const HandleKeyUp = (keyCode: string): void => {
    const [tile, audio] = FetchComponents(keyCode)
    HandleMuted(tile, keyCode)
}

const FetchComponents = (keyCode: string): [HTMLDivElement | null, HTMLAudioElement | null] => {
    const tile: HTMLDivElement | null = document.querySelector(`div[data-key="${keyCode}"]`)
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${keyCode}"]`)
 return [tile, audio]
}

const HandlePlaying = (tile: HTMLDivElement | null, audio: HTMLAudioElement | null, keyCode: string): void => {
    if (tile && audio){
        let hasBeenPlayed: boolean = isPlayedStatus[keyCode]
        if (!hasBeenPlayed){
            tile.classList.add('playing')
            PlaySound(audio)
            isPlayedStatus[keyCode] = true
        }
    }
}

const HandleMuted = (tile: HTMLDivElement | null, keyCode: string): void => {
    if (tile){
        isPlayedStatus[keyCode] = false
        tile.classList.remove('playing')
    }
}

const PlaySound = (audio: HTMLAudioElement): void => {
        audio.currentTime = 0
        audio.play()
}

interface StringBooleanDictionary {
    [key: string]: boolean;
}

