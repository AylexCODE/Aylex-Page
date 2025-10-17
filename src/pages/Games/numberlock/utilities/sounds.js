const bgmList = ["bgm_loop1", "bgm_loop2", "bgm_sorcerer_loop", "blues_guitar_loop", "jazzy_spy_loop", "soft_piano_loop", "tutorial_loop"];

let bgm = new Audio(`../assets/bgm/${bgmList[Math.floor(Math.random() * 7)]}.ogg`);
const start_sound = new Audio("../assets/sounds/start.ogg");
const lockIn_sound = new Audio("../assets/sounds/lock_in.ogg");
const boxSnap_sound = new Audio("../assets/sounds/box_snap.ogg");
const scoreResult_sound = new Audio("../assets/sounds/score_result.ogg");
const btnDisabled_sound = new Audio("../assets/sounds/button_disabled.ogg");

export default class Sounds {
    BGMMusic(){
        bgm.pause();
        bgm.currentTime = 0;
        bgm = new Audio(`../assets/bgm/${bgmList[Math.floor(Math.random() * 7)]}.ogg`);
        bgm.loop = true;
        
        setTimeout(() => bgm.play(), 1000);
    }

    playStartSound(){
        start_sound.pause();
        start_sound.currentTime = 0;
        start_sound.play();
    }

    playButtonDisabledSound(){
        btnDisabled_sound.pause();
        btnDisabled_sound.currentTime = 0;
        btnDisabled_sound.play();
    }

    playLockInSound(){
        lockIn_sound.pause();
        lockIn_sound.currentTime = 0;
        lockIn_sound.play();
    }

    playScoreResultSound(){
        scoreResult_sound.pause();
        scoreResult_sound.currentTime = 0;
        scoreResult_sound.play();
    }

    playBoxSnapSound(){
        boxSnap_sound.pause();
        boxSnap_sound.currentTime = 0;
        boxSnap_sound.play();
    }
}