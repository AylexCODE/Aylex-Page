import React, { useState } from 'react';

import Breakpoints from "../../features/customBreakpoint";
import Clan from "./components/clan";

// import LoadingScreen from '../../components/Loader/LoadingScreen';
// import ClassicWar from './components/classic-war';

function ClashofClans(){
    const [breakpoint, setBreakpoint] = useState(0);
    Breakpoints(setBreakpoint);

    return (
        <main className="h-dvh w-dvw overflow-hidden font-oswald grid place-items-center bg-[#5E5452] [&_h1]:text-shadow-md/85 [&_h2]:text-shadow-md/85 text-white scrollbar-hidden-global">
            {breakpoint >= 768 ? (
                <div className="h-[90%] w-fit overflow-scroll flex flex-col bg-[#E8E8E0]">
                <nav className="w-full p-[0.5rem] bg-[#E8E8E0] flex flex-row gap-[0.5rem] justify-around [&>button]:grow [&>button]:p-px [&>button]:rounded-md [&>button]:bg-linear-[0deg,#A39C92_30%,#847B72_60%] [&>button>h1]:w-full [&>button>h1]:py-[0.25rem] [&>button>h1]:bg-linear-[0deg,#847B72_48%,#A39C92_48%] [&>button>h1]:rounded-md">
                    <button><h1>Home Village</h1></button>
                    <button><h1>Builder Base</h1></button>
                    <button><h1>Clan Capital</h1></button>
                </nav>
                <Clan />
            </div>
            ) : (
                <h1>Screen is too small</h1>
            )}
        </main>
    );
}

export default ClashofClans;
