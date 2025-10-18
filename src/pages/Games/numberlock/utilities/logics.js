import Sounds from "./sounds.js";

export default class Logics {
    #sounds = new Sounds();

    #guessBoxes;
    #lockInBtn;

    #resetBox;
    snapTo = [0, 0];

    #numbers = [];
    #currentNumber;
    #rngLimit;

    #setIsBoxHidden;
    #setDidGameEnded;

    boxes = [];
    #dataBoxes = [];

    constructor(guessBoxes, lockInBtn, resetBox, currentNumber, rngLimit, setDidGameEnded, setIsBoxHidden){
        this.#lockInBtn = lockInBtn;
        Array.from(guessBoxes.children).forEach((box, i) => {
            this.boxes[i] = { x: box.getBoundingClientRect().x, y: box.getBoundingClientRect().y};
            this.#dataBoxes[i] = { x: box.getBoundingClientRect().x, y: box.getBoundingClientRect().y};
        });
        
        this.#guessBoxes = guessBoxes;
        this.#resetBox = resetBox;
        this.#currentNumber = currentNumber;
        this.#rngLimit = rngLimit;
        this.#currentNumber(this.rng());
        this.#setIsBoxHidden = setIsBoxHidden;
        this.#setDidGameEnded = setDidGameEnded;

        this.#sounds.BGMMusic();
        this.#sounds.playStartSound();
    }
    
    rng(){
        let rand = Math.floor(Math.random() * this.#rngLimit + 1);
        while(this.#numbers.includes(rand)){
            rand = Math.floor(Math.random() * this.#rngLimit + 1);
        } return rand;
    }

    lockIn(number){
        if(!this.#lockInBtn.classList.contains("numberlock-lockbtn")){
            return this.#sounds.playButtonDisabledSound();
        }

        this.buttonState(false);
        this.#sounds.playLockInSound();
        this.boxes = this.boxes.filter((n) => {
            if(n.x === this.snapTo[0] && n.y === this.snapTo[1]){
                const boxIndex = this.#dataBoxes.findIndex((box) => (box.x === n.x && box.y === n.y));
                this.#numbers[boxIndex] = number;
                this.#resetBox();
                this.#currentNumber(this.rng());

                this.#guessBoxes.children[boxIndex].innerHTML = `<h2>${number}</h2>`;
                this.#guessBoxes.children[boxIndex].style.backgroundColor = "#CCCCCC";

                return null;
            }else{
                return n;
            }
        });
        
        if(this.boxes.length === 0){
            this.calc();
        }
    }

    async calc(){
        this.#sounds.playScoreResultSound(); this.#setIsBoxHidden(true);
        for(let i = 0; i < this.#dataBoxes.length; i++){
            let valid = 0;
            for(let j = 0; j < this.#dataBoxes.length; j++){
                if(!(this.#numbers[i] <= this.#numbers[j])){
                    valid++;
                }
            }
            if(valid === i){
                this.#guessBoxes.children[i].style.backgroundColor = "#00FF00";
            }else{
                this.#guessBoxes.children[i].style.backgroundColor = "#FF0000";
            }
            await new Promise(r => setTimeout(r, 100));
        }

        this.#setDidGameEnded(true);
    }

    buttonState(state){
        if(state){
            this.#lockInBtn.classList.add("numberlock-lockbtn");
            this.#lockInBtn.classList.remove("numberlock-lockbtn-disabled");
        }else{
            this.#lockInBtn.classList.remove("numberlock-lockbtn");
            this.#lockInBtn.classList.add("numberlock-lockbtn-disabled");
        }
    }
}