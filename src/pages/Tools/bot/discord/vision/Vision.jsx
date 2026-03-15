import React, { useState } from 'react';
import Breakpoints from "../../../../../features/customBreakpoint";

export default function Vision(){
    const [viewStats, setViewStats] = useState(false);

    const [breakpoint, setBreakpoint] = useState(0);
    Breakpoints(setBreakpoint);

    return (
        <main className="h-dvh w-dvw overflow-hidden bg-[#F8F8F3] ">
            <header className="h-[50px] flex flex-row justify-between items-center px-[24px] py-[14px] border-b-[4px] border-[#111111] bg-white">
                <img src="%PUBLIC_URL%/../assets/bot/vision/logo/Vision_BOT_logo.png" height={25} width={25} className="rounded-max" alt="VisionLogo"></img>
                <p className="flex flex-row items-center justify-center gap-[8px] text-[12px]"><span className="size-[8px] bg-[#111111] rounded-max"></span>CONNECTING</p>
            </header>
            <div className={`h-[calc(100dvh-50px)] overflow-x-hidden ${breakpoint  < 768 ? "overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:bg-[#F7F6F3] [&::-webkit-scrollbar-track]:border-borderColor [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-[#111111]" : "overflow-y-hidden"}`}>
                <div className={`flex w-[100dvw] gap-[18px] bg-white p-[20px] overflow-hidden ${breakpoint < 768 ? "h-[calc(200dvh-550px)] flex-col" : "h-[calc(100dvh-50px)] flex-row"}`}>
                    <section className={`flex flex-col bg-white border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px] ${breakpoint  < 768 ? "h-[calc(100dvh-90px)]" : "flex-1"}`}>
                        <span className="flex flex-1 flex-col p-[20px] gap-[14px]">
                            <span className="flex flex-row items-end gap-[8px]">
                                <p className="flex items-center justify-center size-[30px] shrink-0 font-bold text-[12px] text-[#111111] bg-[#F7F6F3]">V</p>
                                <span className="max-w-[72%] flex flex-col">
                                    <p className="border-[2px] border-[#111111] text-[14px] px-[15px] py-[11px] leading-[1.6]">Hi! I'm Vision. Chat with me or teach me something new!</p>
                                    <span className="flex flex-row flex-wrap gap-[8px] mt-[5px]">
                                        <p className="text-[#111111] bg-[#F7F6F3] py-[2px] px-[8px] text-[11px] font-mono">greeting</p>
                                        <p className="text-[#6B6B66] py-[2px] px-[8px] text-[11px] font-mono">fallback</p>
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="flex flex-row p-[14px] gap-[8px] border-t border-t-[#111111]">
                            <input type="text" autoComplete={false} placeholder="Type a message..." className="flex-1 text-[14px] py-[10px] px-[14px] outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></input>
                            <button className="py-[10px] px-[20px] bg-[#111111] text-[14px] font-bold cursor-pointer text-white">Send</button>
                        </span>
                    </section>
                    <section className={`flex flex-col gap-[14px] [&>span]:p-[14px] [&>span]:border-[#111111] [&>span]:border-t-[2px] [&>span]:border-r-[4px] [&>span]:border-b-[4px] [&>span]:border-l-[2px] ${breakpoint  < 768 ? "flex-1" : "w-[270px]"}`}>
                        <span>
                            <p className="mb-[12px] font-bold font-mono text-[10px] tracking-[0.08em]">NLP ANALYSIS</p>
                            <p className="text-[13px] text-[#6B6B66]">Send a message to see analysis.</p>
                        </span>
                        <span>
                            <span className="flex flex-row gap-[4px] mb-[12px] [&>button]:flex-1 [&>button]:text-[12px] [&>button]:p-[6px] [&>button]:cursor-pointer [&>button]:text-center [&>button]:font-mono [&>button]:border-[#111111] [&>button]:border-t-[2px] [&>button]:border-r-[4px] [&>button]:border-b-[4px] [&>button]:border-l-[2px]">
                                <button className={`${viewStats ? "text-[#6B6B66] bg-[#F7F6F3]" : "text-[#FFFFFF] bg-[#111111]"}`} onClick={() => {setViewStats(false)}}>Teach</button>
                                <button className={`${viewStats ? "text-[#FFFFFF] bg-[#111111]" : "text-[#6B6B66] bg-[#F7F6F3]"}`} onClick={() => {setViewStats(true)}}>Stats</button>
                            </span>
                            <span className="flex flex-col gap-[8px]">
                                <input type="text" placeholder="If someone says..." className="flex-1 text-[13px] py-[8px] px-[10px] outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></input>
                                <textarea placeholder="Vision should reply..." className="text-[13px] py-[8px] px-[10px] resize-none outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></textarea>
                                <button className="p-[8px] bg-[#111111] text-[13px] font-bold cursor-pointer text-white">Teach Vision</button>
                            </span>
                        </span>
                    </section>
                </div>
            </div>
        </main>
    )
}