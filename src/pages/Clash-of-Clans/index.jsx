// import React, { useState } from 'react';

// import LoadingScreen from '../../components/Loader/LoadingScreen';
// import ClassicWar from './components/classic-war';

function ClashofClans(){
    return (
        <main className="h-dvh w-dvw font-oswald grid place-items-center bg-[#5E5452] [&_h1]:text-shadow-md/85 text-white">
            <div className="flex flex-col bg-[#E8E8E0]">
                <nav className="w-full p-[0.5rem] sticky top-0 bg-[#E8E8E0] flex flex-row gap-[0.5rem] justify-around [&>button]:p-px [&>button]:rounded-md [&>button]:bg-linear-[0deg,#A39C92_30%,#847B72_60%] [&>button>h1]:px-[2.5rem] [&>button>h1]:py-[0.25rem] [&>button>h1]:bg-linear-[0deg,#847B72_48%,#A39C92_48%] [&>button>h1]:rounded-md">
                    <button><h1>Home Village</h1></button>
                    <button><h1>Builder Base</h1></button>
                    <button><h1>Clan Capital</h1></button>
                </nav>
                <section className="[&>div]:bg-[#7F7F65] flex flex-row mx-[0.5rem] [&>div]:grow">
                    <span className="flex flex-col grow">
                        <span className="w-[50px] h-[50%] bg-[#7F7F65] shrink-0 rounded-l-md">
                            .
                        </span>
                        <span className="w-[50px] h-[50%] bg-[#59594D] shrink-0 rounded-l-md">
                            .
                        </span>
                    </span>
                    <div className="flex flex-col w-[55%] gap-[0.5rem] justify-between p-[0.5rem]">
                        <div className="flex flex-row gap-[1rem] w-full">
                            <span className="flex flex-col w-full gap-[0.10rem]">
                                <span className="flex flex-row w-full justify-between">
                                    <span>
                                        <h1 className="text-[#FFFFCB]">Code Palawom</h1>
                                        <p className="semibold-coc-text">#2J9LCP80Q</p>
                                    </span>
                                    <span>
                                        O
                                    </span>
                                </span>
                                <span className="semibold-coc-text">We strive for progress not perfection.</span>
                            </span>
                        </div>
                        <div className="flex flex-row gap-[1rem] w-full">
                            <span className="flex flex-col w-full gap-[0.10rem] justify-end">
                                <span className="flex flex-row w-full justify-between">
                                    <span className="flex flex-row items-center gap-[0.5rem]">
                                        <p>A</p>
                                        <p>B</p>
                                        <p>C</p>
                                    </span>
                                    <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                                        <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Edit</h1>
                                    </button>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="w-[45%] py-[0.5rem] pl-[0.5rem] flex flex-row gap-[0.5rem] rounded-r-md">
                        <span className="relative top-[1.45rem] border h-[77%] self-center"></span>
                        <div className="flex flex-col [&>span]:semibold-coc-text [&>span]:flex [&>span]:flex-row [&>span]:justify-between [&>span]:border-b [&>span]:py-[0.25rem]">
                            <h1 className="invisible">T</h1>
                            <span>
                                <p>Clan War League</p>
                                <p>Gold League 1</p>
                            </span>
                            <span>
                                <p>Total points:</p>
                                <p>30078</p>
                                <p>23348</p>
                            </span>
                            <span>
                                <p>Clan Location:</p>
                                <p>International</p>
                            </span>
                            <span>
                                <p>Chat Language</p>
                                <p>English</p>
                            </span>
                            <span>
                                <p>Type:</p>
                                <p>Invite only</p>
                            </span>
                            <span>
                                <p>Required trophies:</p>
                                <p>0</p>
                                <p>0</p>
                            </span>
                            <span>
                                <p>Required Town Hall level:</p>
                                <p>5</p>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="bg-[#A8A793] flex flex-row gap-[0.25rem] py-[0.5rem] px-[0.25rem] mx-[0.5rem] rounded-md mt-[0.25rem]">
                    <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                        <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Clan Notice</h1>
                    </button>
                    <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                        <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">War Log</h1>
                    </button>
                    <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                        <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Send Mail</h1>
                    </button>
                    <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                        <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Leave</h1>
                    </button>
                </section>
                <section className="flex flex-col mx-[0.5rem]">
                    <span className="flex flex-row items-center justify-center gap-[0.5rem] [&>h1]:semibold-coc-text">
                        <p className="regular-coc-text">Members 49/50</p>
                        <p>O</p>
                        <h1>Most Tropies</h1>
                    </span>
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>r</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ClashofClans;
