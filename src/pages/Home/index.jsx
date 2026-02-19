import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Breakpoints from '../../features/customBreakpoint';

import BurgerMenu from "./components/menu/BurgerMenu";
import SideBar from "./components/sideBar/SideBar"

function Home(){
    const [breakpoint, setBreakpoint] = useState(0);
    const [navState, setNavState] = useState(false);

    Breakpoints(setBreakpoint);

    function pageHandler(){
        setNavState(false);
    }

    console.log(breakpoint)
    
    return (
        <main className={"h-auto w-dvw bg-bgColor font-textFont select-none text-textColor text-base scrollbar-hidden-global" +(breakpoint >= 768 ? " flex flex-row" : "")}>
            <header className={"h-[4rem] w-dvw bg-componentsColor sticky top-0 px-[1rem] shadow-[var(--color-navShadowColor)_0px_2px_8px] flex flex-row justify-between items-center z-10" +(breakpoint >= 768 ? " hidden" : "")}>
                <img src="%PUBLIC_URL%/../favicon.svg" alt="logo" className="overflow-hidden rounded-max h-[2.2rem] w-[2.2rem]"></img>
                <button className="w-[2rem] h-[1.5rem]" onClick={() => { navState === false ? setNavState(true) : setNavState(false) }}>
                    <BurgerMenu state={navState} />
                </button>
            </header>
            <div className={"w-[70%] h-dvh fixed top-0 left-0 bg-componentsColor rounded-r-2xl z-20 transition-all duration-300" +(breakpoint >= 768 ? " hidden" : "") +(navState ? " opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none")}>
                <SideBar setPage={pageHandler} bp={breakpoint} />
            </div>
            <div onClick={() => setNavState(!navState)} className={"fixed top-0 w-dvw h-dvh z-15 bg-sideBarCover transition-all duration-300 ease-in-out" +(breakpoint >= 768 ? " hidden" : "") +(navState ? " left-0" : " left-[-100dvw]")}></div>
            <aside className={(breakpoint <= 640 ? "hidden " : "") +"h-dvh p-[1rem] pr-0" +(breakpoint > 1280 ? " w-[26rem]" : " w-[22rem]")}>
                <SideBar setPage={()=>false} bp={1024} />
            </aside>
            <section className={"h-dvh w-dvw " +(breakpoint >= 768 ? "w-full" : "")}>
                <Outlet context={breakpoint} />
            </section>
        </main>
    );
}

export default Home;