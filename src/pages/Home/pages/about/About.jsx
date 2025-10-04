import { AnimatePresence, motion } from "motion/react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Socials from "../main/components/Socials";
import Certificates from "./components/Certificates";

export default function About(){
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const breakpoint = useOutletContext();
    
    return (
        <div className={`w-full scrollbar-hidden gap-y-[0.5rem] grid [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-[0.5rem] [&>div>div]:bg-componentsColor [&>div>div]:p-[1rem] [&>div>div>span]:flex [&>div>div>span]:flex-row [&>div>div>span]:gap-[0.75rem] [&>div>div>span]:items-center ${breakpoint >= 992 ? "h-full grid-cols-[2fr_1fr]" : "h-fit grid-cols-1"} ${breakpoint >= 768 ? `gap-y-[1rem] [&>div]:overflow-scroll [&>div]:h-full [&>div]:gap-y-[1rem] ${breakpoint >= 992 ? "[&>div]:first:[&>div]:ml-[1rem] [&>div>div]:mr-[1rem]" : "[&>div>div]:mx-[1rem]"} [&>div>div]:border [&>div>div]:border-borderColor [&>div]:first:[&>div]:w-[calc(100%-2rem)] [&>div>div]:rounded-xl [&>div]:gap-[1rem]` : "[&>div]:h-fit [&>div>div]:shadow-[0px_0px_10px_var(--color-componentsShadow)] [&>div]:first:[&>div]:w-full"}`}>
            <div className={breakpoint >= 992 ? "pb-[1rem]" : ""}>
                <AnimatePresence initial={false}>
                    {isMessageVisible ? (<>
                        <span className="bg-sideBarCover fixed top-0 left-0 h-dvh w-dvw flex items-center justify-center z-11" onClick={() => setIsMessageVisible(false)}></span>
                        <motion.span className="size-[10rem] fixed top-[calc(50%-5rem)] left-[calc(50%-5rem)] px-[1rem] py-[0.5rem] border rounded-xl bg-componentsColor z-12" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="messageBox">
                                <p>Available soon...</p>
                        </motion.span>
                    </>) : null}
                </AnimatePresence>
                <span className={`flex flex-col ${breakpoint >= 768 ? "m-[1rem] mb-[0rem] w-[calc(100%-2rem)] rounded-xl border border-borderColor" : "w-full shadow-[0px_0px_10px_var(--color-componentsShadow)]"}`}>
                    <span className={`block w-full ${breakpoint >= 992 ? "aspect-[4/1] rounded-t-xl" : breakpoint >= 768 ? "aspect-[3.3/1] rounded-t-xl" : "aspect-[2.85/1]"} bg-[#123456]`}></span>
                    <span className="flex flex-row gap-[0.5rem] bg-componentsColor p-[1rem] rounded-b-xl">
                        <div className="relative bottom-[3rem] p-[0.25rem] rounded-max bg-componentsColor">
                            <img src="%PUBLIC_URL%/../favicon.svg" alt="logo" className="rounded-max h-[6.5rem] w-[6.5rem]"></img>
                        </div>
                        <span className="pt-[0.25rem] flex flex-col">
                            <h1 className="text-xl font-bold text-wrap whitespace-wrap">Alexander I. Jala</h1>
                            <p className="opacity-60">Trainee Developer</p>
                            <button className="w-fit border border-borderColor rounded-lg px-[1rem] py-[0.3rem] mt-[1rem]" onClick={() => setIsMessageVisible(!isMessageVisible)}>Message</button>
                        </span>
                    </span>
                </span>
                <div>
                    <span>
                        <svg height="22px" width="22px" viewBox="0 0 24 24" className="stroke-textColor in-[.bg-componentsColorClear]:stroke-sideTextColorActive" fill="none" strokeWidth="2.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <p className="font-bold text-[1.4rem] text-nowrap">About</p>
                    </span>
                    <AboutMe />
                </div>
                <div>
                    <span>
                        <svg width="22px" height="22px" viewBox="0 0 22 22"><path fill="#000000" fillOpacity="0.0" stroke="#000000" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M11.0,4.0C12.65,4.0,14.0,5.35,14.0,7.0C14.0,8.65,12.65,10.0,11.0,10.0C9.35,10.0,8.0,8.65,8.0,7.0C8.0,5.35,9.35,4.0,11.0,4.0Z" strokeLinecap="round"/><path fill="#000000" fillOpacity="0.0" stroke="#000000" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M11.14,1.0C14.44,1.0,17.14,3.72,17.14,7.05C17.14,10.38,14.44,13.1,11.14,13.1C7.84,13.1,5.14,10.38,5.14,7.05C5.14,3.72,7.84,1.0,11.14,1.0Z" strokeLinecap="round"/><path fill="#000000" fillOpacity="0.0" stroke="#000000" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M7.46,11.89C7.46,11.89,4.72,20.26,4.82,20.01C4.82,20.01,7.41,19.05,7.42,19.08C8.12,20.47,8.78,21.36,8.79,21.25C8.79,21.25,11.12,13.0,11.14,13.1C11.14,13.1,13.23,21.37,13.21,21.28C13.21,21.28,14.83,19.35,14.83,19.36C14.83,19.36,17.32,20.21,17.29,20.18C17.29,20.18,14.81,11.87,14.81,11.87C12.66,13.23,11.14,13.1,11.14,13.1C11.14,13.1,9.09,13.1,7.46,11.89Z" strokeLinecap="round"/></svg>
                        <p className="font-bold text-[1.4rem] text-nowrap">Certificates</p>
                    </span>
                    <Certificates />
                </div>
            </div>
            <div className={`${breakpoint >= 992 ? "[&>div]:ml-[0rem] pt-[1rem]" : "mb-[1rem]"} ${breakpoint >= 768 ? `${breakpoint >= 992 ? "[&>div]:w-[calc(100%-1rem)]" : "[&>div]:w-[calc(100%-2rem)]"} [&>div]:rounded-xl` : "w-full"}`}>
                <div>
                    <span>
                        <svg width="22px" height="22px" viewBox="0 0 22 22"><path fill="#000000" fillOpacity="1.0" stroke="#000000" strokeWidth="1.0" strokeOpacity="1.0" strokeMiterlimit="10" d="M17.52,13.55C16.68,13.55,15.88,13.81,15.19,14.32C15.19,14.32,8.54,11.0,8.54,11.0C8.54,11.0,15.19,7.68,15.19,7.68C15.88,8.18,16.68,8.45,17.52,8.45C19.72,8.45,21.5,6.67,21.5,4.47C21.5,2.28,19.72,0.5,17.52,0.5C15.35,0.5,13.57,2.26,13.55,4.43C13.55,4.43,6.81,7.8,6.81,7.8C6.12,7.29,5.32,7.02,4.48,7.02C2.28,7.02,0.5,8.81,0.5,11.0C0.5,13.19,2.28,14.97,4.48,14.97C5.32,14.97,6.12,14.71,6.81,14.2C6.81,14.2,13.55,17.57,13.55,17.57C13.57,19.74,15.35,21.5,17.52,21.5C18.59,21.5,19.58,21.09,20.34,20.34C21.09,19.58,21.5,18.59,21.5,17.52C21.5,15.33,19.72,13.55,17.52,13.55M19.74,19.74C19.15,20.34,18.36,20.66,17.52,20.66C15.79,20.66,14.38,19.25,14.38,17.52C14.38,17.51,14.39,17.48,14.39,17.46C14.39,17.43,14.4,17.39,14.4,17.34C14.41,17.18,14.32,17.02,14.17,16.94C14.17,16.94,6.95,13.33,6.95,13.33C6.89,13.3,6.82,13.29,6.76,13.29C6.66,13.29,6.57,13.32,6.49,13.39C5.91,13.88,5.21,14.14,4.48,14.14C2.75,14.14,1.34,12.73,1.34,11.0C1.34,9.27,2.75,7.86,4.48,7.86C5.21,7.86,5.91,8.12,6.49,8.61C6.62,8.72,6.8,8.74,6.95,8.66C6.95,8.66,14.17,5.05,14.17,5.05C14.32,4.98,14.41,4.82,14.4,4.65C14.4,4.61,14.4,4.57,14.39,4.54C14.39,4.51,14.38,4.49,14.38,4.47C14.38,2.74,15.79,1.34,17.52,1.34C19.26,1.34,20.66,2.74,20.66,4.47C20.66,6.21,19.25,7.61,17.52,7.61C16.79,7.61,16.09,7.35,15.51,6.86C15.38,6.75,15.2,6.73,15.05,6.81C15.05,6.81,7.83,10.42,7.83,10.42C7.68,10.5,7.59,10.65,7.6,10.82C7.6,10.82,7.6,11.18,7.6,11.18C7.59,11.34,7.68,11.5,7.83,11.58C7.83,11.58,15.05,15.19,15.05,15.19C15.2,15.26,15.38,15.24,15.51,15.13C16.09,14.64,16.79,14.38,17.52,14.38C19.25,14.38,20.66,15.79,20.66,17.52C20.66,18.36,20.34,19.15,19.74,19.74Z" strokeLinecap="round"/></svg>
                        <p className="font-bold text-[1.4rem] text-nowrap">Socials</p>
                    </span>
                    <div className="w-full">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}
