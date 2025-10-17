import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { useEffect, useRef } from "react";
import Boxes from "./Boxes";
import Sounds from "../utilities/sounds";

export default function GameScreen(props){
    gsap.registerPlugin(useGSAP, Draggable);
    const sounds = new Sounds();

    const gameContainer = useRef(null);
    const box = useRef(null);
    const dataBoxes = [];
    let snapTo = [], boxes = [], guessBoxes;

    function setGuessBox(reference){
        guessBoxes = reference.current;
    }

    useEffect(() => {
        Array.from(guessBoxes.children).forEach((box, i) => {
            boxes[i] = { x: box.getBoundingClientRect().x, y: box.getBoundingClientRect().y};
            dataBoxes[i] = { x: box.getBoundingClientRect().x, y: box.getBoundingClientRect().y};
        });
        // eslint-disable-next-line
    }, []);

    useGSAP(() => {
        gsap.set("#boxContainer", {
            x: window.innerWidth / 2 - 25,
            y: window.innerHeight / 2 - 225
        });

        gsap.set(box.current, {
            x: window.innerWidth / 2 - 25,
            y: window.innerHeight / 2 - 225
        });
        
        Draggable.create(box.current, {
            type: "x,y",
            inertia: true,
            bounds: props.screenWindow.current,
            liveSnap: {
                points: function (point) {
                    //buttonState(false);
                    
                    for(const p of boxes){
                        const dx = point.x - p.x;
                        const dy = point.y - p.y;
                        if (Math.sqrt(dx * dx + dy * dy) < 30) {
                            snapTo = [p.x, p.y];
                            return point;
                        }
                    }
                    snapTo = null;
                    return point;
                }
            },
            onDragEnd: function(){
                if(snapTo){
                    gsap.to(box.current, {
                        x: snapTo[0],
                        y: snapTo[1],
                        delay: 0.2,
                        ease: "power2.inOut"
                    });
                    
                    setTimeout(() => {sounds.playBoxSnapSound();}, 400);
                    //setTimeout(() => {buttonState(true); playBoxSnapSound();}, 400);
                }else{
                    //buttonState(false);
                }
            }
        });
    }, {gameContainer});

    return (
        <section ref={gameContainer} className="w-full h-fit flex flex-col items-center">
            <button onClick={() => {props.setIsInMenu(true);}} className="absolute right-[1rem] top-[1rem]">
                <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,1.02C1.03,1.02,14.98,14.97,14.98,14.97C14.98,14.97,14.98,14.97,14.98,14.97Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,14.97C1.03,14.97,14.98,1.02,14.98,1.02C14.98,1.02,14.98,1.02,14.98,1.02Z" stroke-linecap="round"/></svg>
            </button>
            <Boxes difficulty={props.difficulty} setGuessBox={setGuessBox} />
            <div ref={box} className="absolute top-[2px] left-[2px] size-[50px] border bg-[#FFD700] z-2"></div><span className="absolute top-0 left-0 size-[50px] border border-gray-500 border-dashed z-1" id="boxContainer"></span>
            <span className="[&>button]:py-[0.5rem] [&>button]:px-[1rem] [&>button]:font-bold [&>button]:rounded-[0.5rem] [&>button]:border-t-[1px] [&>button]:border-r-[2px] [&>button]:border-b-[2px] [&>button]:border-l-[1px] [&>button]:hover:border-r-[1px] [&>button]:hover:border-b-[1px] [&>button]:hover:top-[1px] [&>button]:hover:left-[1px] [&>button]:hover:mt-[1px] [&>button]:hover:ml-[1px]">
                <button className="border-[#FF0000] bg-[#8B0000] text-[#FF0000]">LOCK-IN</button>
                <button className="hidden">RESET</button>
            </span>
        </section>
    )
}