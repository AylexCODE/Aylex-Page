import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import Breakpoints from "../../../features/customBreakpoint";

function NumberLock(){
    const [breakpoint, setBreakpoint] = useState(0);
    const [isInMenu, setIsInMenu] = useState(true);
    const [isSelectingDifficulty, setIsSelectingDifficulty] = useState(false);
    Breakpoints(setBreakpoint);

    console.log(breakpoint);

    return (
        <main className="h-dvh w-dvw grid place-items-center overflow-hidden bg-[#F8F8F3]">
        {isInMenu ? (
            <>
            <section className="flex flex-col justify-center items-center gap-[0.5rem]">
                <h1 className="flex flex-row flex-wrap justify-center items-center font-bold text-[2rem]">Sort Randomly Generated&nbsp;<br/><span>Numbers</span></h1>
                <div className="flex flex-row gap-[0.5rem] mb-[1rem] [&>span]:grid [&>span]:place-items-center [&>span]:size-[2rem] [&>span]:border-black [&>span]:border-t-[1px] [&>span]:border-r-[2px] [&>span]:border-b-[2px] [&>span]:border-l-[1px]">
                    <span>7</span><span>24</span><span><p className="animate-[fadePulse_2s_linear_infinite_alternate]">67</p></span><span><p className="opacity-0 animate-[fadePulse_2s_2s_linear_infinite_alternate]">67</p></span><span>98</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-[0.5rem] [&>button]:w-full [&>button]:px-[1rem] [&>button]:py-[0.5rem] [&>button]:font-bold [&>button]:border [&>button]:rounded-[0.5rem] [&>button]:bg-[#CCCCCC]">
                    <button onClick={() => {setIsInMenu(false);}}>Play</button>
                    <button onClick={() => {setIsSelectingDifficulty(true)}}>Set Difficulty</button>
                    <button onClick={() => {window.close()}}>Quit</button>
                </div>
                <AnimatePresence initial={false}>
                {isSelectingDifficulty ? (
                    <>
                    <span className="bg-sideBarCover fixed top-0 left-0 h-dvh w-dvw flex items-center justify-center z-5" onClick={() => setIsSelectingDifficulty(false)}></span>
                    <motion.span className="w-[10rem] h-[15rem] fixed top-[calc(50%-7.5rem)] left-[calc(50%-5rem)] px-[1rem] py-[0.5rem] border rounded-xl bg-componentsColor z-10" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="difficultyBox">
                        <button onClick={() => {setIsSelectingDifficulty(false)}}>
                            <svg height="19px" width="19px" viewBox="0 0 19 19">
	                            <path d="M 1 1 L 18 18 Z M 1 18 L 18 1 Z" stroke="#000000" stroke-width="1" fill="none"/>
                            </svg>
                        </button>
                        <span>
                            <button onclick="setDifficulty(5, 50)" popovertarget="difficultyMenu" popovertargetaction="hidden">Easy</button>
                            <button onclick="setDifficulty(10, 100)" popovertarget="difficultyMenu" popovertargetaction="hidden">Normal</button>
                            <button onclick="setDifficulty(20, 500)" popovertarget="difficultyMenu" popovertargetaction="hidden">Hard</button>
                            <button onclick="setDifficulty(30, 999)" popovertarget="difficultyMenu" popovertargetaction="hidden">Insane</button>
                        </span>
                    </motion.span>
                    </>
                ) : null }
                </AnimatePresence>
            </section>
            </>
        ) : (
            <>
            <section class="gameContainer">
                <button onClick={() => {setIsInMenu(true);}} id="menuBtn">×</button>
                <section id="boxesContainer"></section>
                <div id="box"></div><span id="boxContainer"></span>
                <span>
                    <button class="placeBtn" onclick="lockIn()">LOCK-IN</button>
                    <button class="resetBtn" onclick="reset(true)">RESET</button>
                </span>
            </section>
            </>
        )}
        </main>
    );
}

export default NumberLock;