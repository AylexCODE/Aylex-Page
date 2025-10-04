import { useOutletContext } from "react-router-dom";
import GithubContributions from './components/GithubContributions';
import ProjectsList from './components/ProjectsList';
import Socials from "../main/components/Socials";
import SideProjectsList from "./components/SideProjectsList";

export default function Projects(){
    const breakpoint = useOutletContext();
    
    return (
        <div className={`w-full scrollbar-hidden gap-y-[0.5rem] grid [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-[0.5rem] [&>div>div]:bg-componentsColor [&>div>div]:p-[1rem] [&>div>div>span]:flex [&>div>div>span]:flex-row [&>div>div>span]:gap-[0.75rem] [&>div>div>span]:items-center [&>div>div>span>p]:font-bold [&>div>div>span>p]:text-[1.4rem] [&>div>div>span>p]:text-nowrap ${breakpoint >= 992 ? "h-full grid-cols-[2fr_1fr]" : "h-fit grid-cols-1"} ${breakpoint >= 768 ? `gap-y-[1rem] [&>div]:overflow-scroll [&>div]:h-full [&>div]:gap-y-[1rem] ${breakpoint >= 992 ? "[&>div]:first:[&>div]:ml-[1rem] [&>div>div]:mr-[1rem]" : "[&>div>div]:mx-[1rem]"} [&>div>div]:border [&>div>div]:border-borderColor [&>div]:first:[&>div]:w-[calc(100%-2rem)] [&>div>div]:rounded-xl [&>div]:gap-[1rem]` : "[&>div]:h-fit [&>div>div]:shadow-[0px_0px_10px_var(--color-componentsShadow)] [&>div]:first:[&>div]:w-full"}`}>
            <div className={breakpoint >= 992 ? "pb-[1rem]" : ""}>
                <div className="mt-[1rem]">
                    <span className="pb-[1rem]">
                        <a href="https://github.com/AylexCODE" target="_blank" rel="noreferrer" className="font-bold text-[1.35rem] text-nowrap flex flex-row gap-[0.75rem] items-center"><svg width="22px" height="22px" viewBox="0 0 22 22"><path fill="#000000" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M10.98,0.5C5.59,0.5,1.01,4.33,0.14,9.55C-0.72,14.76,2.4,19.81,7.5,21.48C8.05,21.59,8.29,21.25,8.29,20.97C8.29,20.97,8.29,20.04,8.29,19.14C5.24,19.78,4.6,17.69,4.6,17.69C4.38,17.04,3.93,16.48,3.32,16.12C2.33,15.46,3.4,15.46,3.4,15.46C4.11,15.56,4.73,15.97,5.08,16.58C5.71,17.69,7.15,18.09,8.28,17.47C8.33,16.93,8.57,16.41,8.97,16.03C6.54,15.75,3.98,14.83,3.98,10.7C3.96,9.64,4.36,8.6,5.11,7.82C4.77,6.89,4.81,5.87,5.22,4.97C5.22,4.97,6.14,4.68,8.23,6.07C10.03,5.59,11.93,5.59,13.73,6.07C15.82,4.68,16.74,4.97,16.74,4.97C17.14,5.87,17.18,6.89,16.85,7.82C17.59,8.6,17.99,9.64,17.98,10.7C17.98,14.85,15.41,15.75,12.96,16.02C13.5,16.55,13.77,17.28,13.71,18.02C13.71,19.45,13.71,20.61,13.71,20.97C13.71,20.97,13.91,21.59,14.5,21.48C19.61,19.81,22.73,14.74,21.85,9.52C20.98,4.3,16.37,0.48,10.98,0.5Z" strokeLinecap="round"/></svg>Contributions</a>
                    </span>
                    <GithubContributions />
                </div>
                <div>
                    <span>
                        <svg height="22px" width="22px" viewBox="0 0 24 24" className="stroke-textColor in-[.bg-componentsColorClear]:stroke-sideTextColorActive" fill="none" strokeWidth="2.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                            <path d="M1.82,18.07C1.82,9.87,1.81,9.2,1.82,5.01C1.83,3.27,3.05,2.84,3.69,2.84C6.41,2.81,4.7,2.81,8.76,2.84C10.56,2.85,10.49,5.96,12.24,5.96C16.59,5.97,16.12,5.97,19.68,5.96C21.84,5.96,21.95,7.61,21.95,8.08C21.93,11.54,21.95,12.99,21.95,18.07C21.95,18.19,21.89,19.78,20.18,19.78C15.88,19.78,12.32,19.78,3.74,19.78C3.5,19.78,1.82,19.78,1.82,18.07Z" />
                        </svg>
                        <p>Projects</p>
                    </span>
                    <div className="w-full">
                        <ProjectsList project={function(){}} />
                    </div>
                    <SideProjectsList />
                </div>
            </div>
            <div className={`${breakpoint >= 992 ? "[&>div]:ml-[0rem] pt-[1rem]" : "mb-[1rem]"} ${breakpoint >= 768 ? `${breakpoint >= 992 ? "[&>div]:w-[calc(100%-1rem)]" : "[&>div]:w-[calc(100%-2rem)]"} [&>div]:rounded-xl` : "w-full"}`}>
                <div>
                    <span>
                        <svg width="22px" height="22px" viewBox="0 0 22 22"><path fill="#000000" fillOpacity="1.0" stroke="#000000" strokeWidth="1.0" strokeOpacity="1.0" strokeMiterlimit="10" d="M17.52,13.55C16.68,13.55,15.88,13.81,15.19,14.32C15.19,14.32,8.54,11.0,8.54,11.0C8.54,11.0,15.19,7.68,15.19,7.68C15.88,8.18,16.68,8.45,17.52,8.45C19.72,8.45,21.5,6.67,21.5,4.47C21.5,2.28,19.72,0.5,17.52,0.5C15.35,0.5,13.57,2.26,13.55,4.43C13.55,4.43,6.81,7.8,6.81,7.8C6.12,7.29,5.32,7.02,4.48,7.02C2.28,7.02,0.5,8.81,0.5,11.0C0.5,13.19,2.28,14.97,4.48,14.97C5.32,14.97,6.12,14.71,6.81,14.2C6.81,14.2,13.55,17.57,13.55,17.57C13.57,19.74,15.35,21.5,17.52,21.5C18.59,21.5,19.58,21.09,20.34,20.34C21.09,19.58,21.5,18.59,21.5,17.52C21.5,15.33,19.72,13.55,17.52,13.55M19.74,19.74C19.15,20.34,18.36,20.66,17.52,20.66C15.79,20.66,14.38,19.25,14.38,17.52C14.38,17.51,14.39,17.48,14.39,17.46C14.39,17.43,14.4,17.39,14.4,17.34C14.41,17.18,14.32,17.02,14.17,16.94C14.17,16.94,6.95,13.33,6.95,13.33C6.89,13.3,6.82,13.29,6.76,13.29C6.66,13.29,6.57,13.32,6.49,13.39C5.91,13.88,5.21,14.14,4.48,14.14C2.75,14.14,1.34,12.73,1.34,11.0C1.34,9.27,2.75,7.86,4.48,7.86C5.21,7.86,5.91,8.12,6.49,8.61C6.62,8.72,6.8,8.74,6.95,8.66C6.95,8.66,14.17,5.05,14.17,5.05C14.32,4.98,14.41,4.82,14.4,4.65C14.4,4.61,14.4,4.57,14.39,4.54C14.39,4.51,14.38,4.49,14.38,4.47C14.38,2.74,15.79,1.34,17.52,1.34C19.26,1.34,20.66,2.74,20.66,4.47C20.66,6.21,19.25,7.61,17.52,7.61C16.79,7.61,16.09,7.35,15.51,6.86C15.38,6.75,15.2,6.73,15.05,6.81C15.05,6.81,7.83,10.42,7.83,10.42C7.68,10.5,7.59,10.65,7.6,10.82C7.6,10.82,7.6,11.18,7.6,11.18C7.59,11.34,7.68,11.5,7.83,11.58C7.83,11.58,15.05,15.19,15.05,15.19C15.2,15.26,15.38,15.24,15.51,15.13C16.09,14.64,16.79,14.38,17.52,14.38C19.25,14.38,20.66,15.79,20.66,17.52C20.66,18.36,20.34,19.15,19.74,19.74Z" strokeLinecap="round"/></svg>
                        <p>Socials</p>
                    </span>
                    <div className="w-full">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}