export default class Sounds {
    #bgmList = ["bgm_loop1", "bgm_loop2", "bgm_sorcerer_loop", "blues_guitar_loop", "jazzy_spy_loop", "soft_piano_loop", "tutorial_loop"];
    
    bgm = new Audio(`%PUBLIC_URL%/../assets/games/numberlock/bgm/${this.#bgmList[Math.floor(Math.random() * 7)]}.ogg`);
    #start_sound = new Audio("%PUBLIC_URL%/../assets/games/numberlock/sounds/start.ogg");
    #lockIn_sound = new Audio("%PUBLIC_URL%/../assets/games/numberlock/sounds/lock_in.ogg");
    #boxSnap_sound = new Audio("%PUBLIC_URL%/../assets/games/numberlock/sounds/box_snap.ogg");
    #scoreResult_sound = new Audio("%PUBLIC_URL%/../assets/games/numberlock/sounds/score_result.ogg");
    #btnDisabled_sound = new Audio("%PUBLIC_URL%/../assets/games/numberlock/sounds/button_disabled.ogg");
    
    BGMMusic(){
        this.bgm.pause();
        this.bgm.currentTime = 0;
        this.bgm = new Audio(`%PUBLIC_URL%/../assets/games/numberlock/bgm/${this.#bgmList[Math.floor(Math.random() * 7)]}.ogg`);
        this.bgm.loop = true;
        
        setTimeout(() => this.bgm.play(), 1000);
    }

    playStartSound(){
        this.#start_sound.pause();
        this.#start_sound.currentTime = 0;
        this.#start_sound.play();
    }

    playButtonDisabledSound(){
        this.#btnDisabled_sound.pause();
        this.#btnDisabled_sound.currentTime = 0;
        this.#btnDisabled_sound.play();
    }

    playLockInSound(){
        this.#lockIn_sound.pause();
        this.#lockIn_sound.currentTime = 0;
        this.#lockIn_sound.play();
    }

    playScoreResultSound(){
        this.#scoreResult_sound.pause();
        this.#scoreResult_sound.currentTime = 0;
        this.#scoreResult_sound.play();
    }

    playBoxSnapSound(){
        this.#boxSnap_sound.pause();
        this.#boxSnap_sound.currentTime = 0;
        this.#boxSnap_sound.play();
    }
}