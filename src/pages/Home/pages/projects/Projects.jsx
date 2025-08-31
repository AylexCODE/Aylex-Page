import { useOutletContext } from "react-router-dom";
import GithubContributions from './components/GithubContributions';
import ProjectsList from './components/ProjectsList';

export default function Projects(){
    const breakpoint = useOutletContext();
    
    return (
        <div className={`w-full scrollbar-hidden gap-y-[0.5rem] grid [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-[0.5rem] [&>div>div]:bg-componentsColor [&>div>div]:p-[1rem] [&>div>div>span]:flex [&>div>div>span]:flex-row [&>div>div>span]:gap-[0.75rem] [&>div>div>span]:items-center [&>div>div>span>p]:font-bold [&>div>div>span>p]:text-[1.35rem] [&>div>div>span>p]:text-nowrap ${breakpoint >= 992 ? "h-full grid-cols-[2fr_1fr]" : "h-fit grid-cols-1"} ${breakpoint >= 768 ? "pt-[1rem] gap-y-[1rem] [&>div]:overflow-scroll [&>div]:h-full [&>div]:gap-y-[1rem] [&>div>div]:mx-[1rem] [&>div>div]:border [&>div>div]:border-borderColor [&>div>div]:w-[calc(100%-2rem)] [&>div>div]:rounded-xl [&>div]:gap-[1rem]" : "[&>div]:h-fit [&>div>div]:shadow-[0px_0px_10px_var(--color-componentsShadow)] [&>div>div]:w-full"}`}>
            <div>
                <div>
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
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}