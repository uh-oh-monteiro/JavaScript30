var isPlayedStatus: StringBooleanDictionary = {}

document.addEventListener('DOMContentLoaded', function() {
    InitialiseKeyPlayingStatus() 
})

document.addEventListener('keydown',function(event:KeyboardEvent){
    HandleKeyDown(`${event.keyCode}`)
});

document.addEventListener('keyup',function(event:KeyboardEvent){
    HandleKeyUp(`${event.keyCode}`)
});

const InitialiseKeyPlayingStatus = (): void => {
    const playableKeysDivs = GetPlayableDivs();
    CreateHashTable(playableKeysDivs);
  }
  
const GetPlayableDivs = (): NodeList | null => {
    const keysDiv = document.querySelector('.keys');
    let playableKeysDivs: NodeList | null = null
    if (keysDiv) {
        const playableKeysDivs = keysDiv.querySelectorAll(':scope > div');
    }
    return playableKeysDivs
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

const CreateHashTable = (playableKeysDivs: NodeList| null): void => {
    if (playableKeysDivs) {
        const playableKeysDivsArray = Array.from(playableKeysDivs) as HTMLDivElement[];
        const dataKeys = playableKeysDivsArray.map(div => div.getAttribute('data-key'));
        dataKeys.forEach(key => {
            if (key) {
                isPlayedStatus[key] = false;
            }
        });
    }
  }

interface StringBooleanDictionary {
    [key: string]: boolean;
}

