import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

import Breakpoints from "../../../features/customBreakpoint";

import GameScreen from "./components/GameScreen";

function NumberLock(){
    const [breakpoint, setBreakpoint] = useState(0);
    const [isInMenu, setIsInMenu] = useState(true);
    const [isSelectingDifficulty, setIsSelectingDifficulty] = useState(false);
    const [difficulty, setDifficulty] = useState({boxCount: 10, rngLimit: 100});
    const [playAgain, setPlayAgain] = useState(false);
    const screenWindow = useRef(null);
    
    Breakpoints(setBreakpoint);

    console.log(breakpoint);

    return (
        <main ref={screenWindow} id="E" className="h-dvh w-dvw grid place-items-center overflow-hidden bg-[#F8F8F3] select-none">
        {isInMenu ? (
            <section className="[&>span]:flex [&>span]:flex-col [&>span]:justify-center [&>span]:items-center [&>span]:gap-[0.5rem]">
                <span className={`${isSelectingDifficulty ? "opacity-25" : ""}`}>
                    <h1 className={`flex flex-wrap justify-center items-center font-bold text-center ${breakpoint >= 768 ? "text-[2rem] flex-row" : "text-[1rem] flex-col"}`}>Sort Randomly Generated&nbsp;<br/><span className="text-[2rem]">Numbers</span></h1>
                    <div className="flex flex-row gap-[0.5rem] mb-[1rem] [&>span]:grid [&>span]:place-items-center [&>span]:size-[2rem] [&>span]:border-black [&>span]:border-t-[1px] [&>span]:border-r-[2px] [&>span]:border-b-[2px] [&>span]:border-l-[1px]">
                        <span>7</span><span>24</span><span><p className="animate-[fadePulse_2s_linear_infinite_alternate]">67</p></span><span><p className="opacity-0 animate-[fadePulse_2s_2s_linear_infinite_alternate]">67</p></span><span>98</span>
                    </div>
                    <div className="relative flex flex-col justify-center items-center gap-[0.5rem] [&>button]:bg-[#CCCCCC50] [&>button]:w-full [&>button]:px-[1rem] [&>button]:py-[0.5rem] [&>button]:font-bold [&>button]:border-t-[1px] [&>button]:border-r-[2px] [&>button]:border-b-[2px] [&>button]:border-l-[1px] [&>button]:rounded-[0.5rem] [&>button]:hover:border-r-[1px] [&>button]:hover:border-b-[1px] [&>button]:hover:top-[1px] [&>button]:hover:left-[1px] [&>button]:hover:mt-[1px] [&>button]:hover:ml-[1px] [&>button]:active:bg-black [&>button]:active:text-white">
                        <button onClick={() => {setIsInMenu(false);}}>Play</button>
                        <button onClick={() => {setIsSelectingDifficulty(true)}}>Set Difficulty</button>
                        <button onClick={() => {window.close()}}>Quit</button>
                    </div>
                </span>
                <AnimatePresence initial={false}>
                {isSelectingDifficulty ? (
                    <>
                    <span className="bg-sideBarCover fixed top-0 left-0 h-dvh w-dvw flex items-center justify-center z-5" onClick={() => setIsSelectingDifficulty(false)}></span>
                    <motion.span className="w-[15rem] h-[15rem] fixed top-[calc(50%-7.5rem)] left-[calc(50%-7.5rem)] px-[1rem] py-[0.5rem] border-t-[2px] border-r-[5px] border-b-[5px] border-l-[2px] bg-componentsColor z-10" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="difficultyBox">
                        <button onClick={() => {setIsSelectingDifficulty(false)}} className="absolute right-[0.3rem] top-[0.3rem]">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,1.02C1.03,1.02,14.98,14.97,14.98,14.97C14.98,14.97,14.98,14.97,14.98,14.97Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" stroke-width="2.0" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.03,14.97C1.03,14.97,14.98,1.02,14.98,1.02C14.98,1.02,14.98,1.02,14.98,1.02Z" stroke-linecap="round"/></svg>
                        </button>
                        <span className="w-full flex flex-col justify-center gap-[0.5rem] pt-[0.75rem] [&>button]:px-[1rem] [&>button]:py-[0.5rem] [&>button]:rounded-[0.5rem] [&>button]:border-t-[1px] [&>button]:border-r-[2px] [&>button]:border-b-[2px] [&>button]:border-l-[1px] [&>button]:hover:border-r-[1px] [&>button]:hover:border-b-[1px] [&>button]:hover:top-[1px] [&>button]:hover:left-[1px] [&>button]:hover:mt-[1px] [&>button]:hover:ml-[1px] [&>button]:active:bg-black [&>button]:active:text-white">
                            <button onClick={() => {setDifficulty({boxCount: 5, rngLimit: 50}); setIsSelectingDifficulty(false)}} title="5 Tiles, 50 RNG Limit">Easy</button>
                            <button onClick={() => {setDifficulty({boxCount: 10, rngLimit: 100}); setIsSelectingDifficulty(false)}} title="10 Tiles, 100 RNG Limit">Normal</button>
                            <button onClick={() => {setDifficulty({boxCount: 20, rngLimit: 500}); setIsSelectingDifficulty(false)}} title="20 Tiles, 500 RNG Limit">Hard</button>
                            <button onClick={() => {setDifficulty({boxCount: 30, rngLimit: 999}); setIsSelectingDifficulty(false)}} title="30 Tiles, 999 RNG Limit">Insane</button>
                        </span>
                    </motion.span>
                    </>
                ) : null }
                </AnimatePresence>
            </section>
        ) : (
            <GameScreen difficulty={difficulty} setIsInMenu={setIsInMenu} screenWindow={screenWindow} reset={setPlayAgain} resetValue={playAgain} key={`Play: ${playAgain}`} breakpoint={breakpoint} />
        )}
        </main>
    );
}

export default NumberLock;