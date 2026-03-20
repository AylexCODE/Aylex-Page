import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function ProjectsList(props){
    const projectsList = useRef(null);
    
    useEffect(() => {
        props.project(projectsList.current.children.length);
        // eslint-disable-next-line
    }, []);

    const calendarIcon = (
        <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" strokeWidth="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.5,13.83C1.54,14.42,2.08,15.0,2.62,15.0C2.62,15.0,13.42,15.0,13.42,15.0C13.96,15.0,14.5,14.42,14.5,13.83C14.5,13.83,14.5,3.92,14.5,3.92C14.5,3.33,13.96,2.75,13.42,2.75C13.42,2.75,2.62,2.75,2.62,2.75C2.08,2.75,1.54,3.33,1.54,3.92C1.54,3.92,1.5,13.83,1.5,13.83M1.54,5.67C1.54,5.67,14.5,5.67,14.5,5.67C14.5,5.67,1.54,5.67,1.54,5.67M5.32,1.0C5.32,1.0,5.32,4.5,5.32,4.5C5.32,4.5,5.32,1.0,5.32,1.0M10.72,1.0C10.72,1.0,10.72,4.5,10.72,4.5C10.72,4.5,10.72,1.0,10.72,1.0Z" stroke-linecap="round"/></svg>
    );
    
    return (
        <div className="pt-[1rem] w-full">
            <ul ref={projectsList} className="w-full overflow-y-scroll flex flex-row gap-[1rem] [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:gap-[0.35rem] [&>li]:w-full [&>li]:border [&>li]:border-borderColor [&>li]:rounded-xl [&>li]:py-[0.5rem] [&>li]:px-[1rem] [&>li>a>span]:flex [&>li>a>span]:flex-row [&>li>a>span]:gap-[0.5rem] [&>li>a>span]:items-center [&>li>a>span>h3]:font-medium [&>li>a>p]:flex [&>li>a>p]:flex-row [&>li>a>p]:gap-[0.5rem] [&>li>a>p]:items-center [&>li>a>p]:text-[0.85rem] [&>li>a>p]:opacity-60 [&>li>a>span>p]:text-[0.85rem] [&>li>a>span>p]:text-[#006400] [&>li>a>span>p]:bg-[#00FF0020] [&>li>a>span>p]:border [&>li>a>span>p]:border-[#00FF0035] [&>li>a>span>p]:rounded-2xl [&>li>a>span>p]:px-[0.5rem]">
                <li>
                    <NavLink to="/games/numberlock" target="_blank">
                        <span>
                            <h3>Number Lock &#x28;Game&#x29;</h3>
                            <p>Public</p>
                        </span>
                        <p>{calendarIcon} October 2025</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clipboard" target="_blank">
                        <span>
                            <h3>Cloud Clipboard</h3>
                            <p>Public</p>
                        </span>
                        <p>{calendarIcon} October 2025</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bot/vision" target="_blank">
                        <span>
                            <h3>Chatbot &#x28;NLP&#x29;</h3>
                            <p>Public</p>
                        </span>
                        <p>{calendarIcon} March 2026</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}