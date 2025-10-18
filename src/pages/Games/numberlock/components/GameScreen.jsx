import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { useEffect, useRef, useState } from "react";
import Boxes from "./Boxes";
import Sounds from "../utilities/sounds";
import Logics from "../utilities/logics";

export default function GameScreen(props){
    gsap.registerPlugin(useGSAP, Draggable);

    const sounds = new Sounds();
    const logics = useRef(null);

    const [currentNumber, setCurrentNumber] = useState();
    const [isBoxHidden, setIsBoxHidden] = useState(false);
    const [didGameEnded, setDidGameEnded] = useState(false);

    const gameContainer = useRef(null);
    const boxContainer = useRef(null);
    const box = useRef(null);
    const guessBoxes = useRef(null);
    const dragging = useRef(null);
    const lockInBtn = useRef(null);

    function setGuessBox(reference){
        guessBoxes.current = reference.current;
    }

    useEffect(() => {
        logics.current = new Logics(guessBoxes.current, lockInBtn.current, setBox, setCurrentNumber, props.difficulty.rngLimit, setDidGameEnded, setIsBoxHidden);
        logics.current.buttonState(false);

        // eslint-disable-next-line
    }, []);

    function setBox(){
        gsap.set(box.current, {
            x: window.innerWidth / 2 - 25,
            y: window.innerHeight / 2 - 225
        });
    }

    useGSAP(() => {
        gsap.set(boxContainer.current, {
            x: window.innerWidth / 2 - 25,
            y: window.innerHeight / 2 - 225
        });

        setBox();
        
        Draggable.create(box.current, {
            type: "x,y",
            inertia: true,
            bounds: props.screenWindow.current,
            liveSnap: {
                points: function (point) {
                    logics.current.buttonState(false);
                    clearTimeout(dragging.current);
                    dragging.current = setTimeout(() => {
                        for(const p of logics.current.boxes){
                            const dx = point.x - p.x;
                            const dy = point.y - p.y;
                            if (Math.sqrt(dx * dx + dy * dy) < 30) {
                                logics.current.snapTo = [p.x, p.y];
                                return point;
                            }
                        }
                    }, 200);
                    logics.current.snapTo = null;
                    return point;
                }
            },
            onDragEnd: function(){
                setTimeout(() => {
                    if(logics.current.snapTo){
                        gsap.to(box.current, {
                            x: logics.current.snapTo[0],
                            y: logics.current.snapTo[1],
                            delay: 0.2,
                            ease: "power2.inOut"
                        });
                        
                        setTimeout(() => {logics.current.buttonState(true); sounds.playBoxSnapSound();}, 400);
                    }else{
                        logics.current.buttonState(false);
                    }
                }, 400);
            }
        });
    }, {gameContainer});

    return (
        <section ref={gameContainer} className="w-full h-fit flex flex-col items-center">
            <button onClick={() => {props.setIsInMenu(true);}} className="absolute right-[1rem] top-[1rem]">
                <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,1.02C1.03,1.02,14.98,14.97,14.98,14.97C14.98,14.97,14.98,14.97,14.98,14.97Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,14.97C1.03,14.97,14.98,1.02,14.98,1.02C14.98,1.02,14.98,1.02,14.98,1.02Z" stroke-linecap="round"/></svg>
            </button>
            <Boxes difficulty={props.difficulty} setGuessBox={setGuessBox} />
            {isBoxHidden ? ( <div ref={box} className="hidden"></div> ) : ( <div ref={box} className="grid place-items-center absolute top-[2px] left-[2px] size-[50px] border bg-[#FFD700] z-2"><h2 className="text-[1.5rem] font-bold">{currentNumber}</h2></div> )}
            <span ref={boxContainer} className="absolute top-[2px] left-[2px] size-[50px] border border-gray-500 border-dashed z-1" id="boxContainer"></span>
            <span className="[&>button]:py-[0.5rem] [&>button]:px-[1rem] [&>button]:font-bold [&>button]:rounded-[0.5rem] [&>button]:border-t-[1px] [&>button]:border-r-[2px] [&>button]:border-b-[2px] [&>button]:border-l-[1px] [&>button]:hover:border-r-[1px] [&>button]:hover:border-b-[1px] [&>button]:hover:top-[1px] [&>button]:hover:left-[1px] [&>button]:hover:mt-[1px] [&>button]:hover:ml-[1px]">
            {didGameEnded ? (
                <button className="bg-[#CCCCCC]">RESET</button>
            ) : (
                <button ref={lockInBtn} onClick={() => {logics.current.lockIn(currentNumber)}}>LOCK-IN</button>
            )}
            </span>
        </section>
    )
}