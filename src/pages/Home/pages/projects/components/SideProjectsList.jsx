import OctoKitRest from "../utilities/octoKit";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function SideProjectsList(){
    const [projectsFiles, setProjectsFiles] = useState();
    let tempProjectFiles = useRef();

    useEffect(() => {
        (async function(){
            const data = await new OctoKitRest().getSideProjectsFiles();
            const refined = data.map((file) => {
                return {
                    path: file,
                    type: file.split(".").findLast((type) => type)
                }
            });
            
            tempProjectFiles.current = refined;
            setProjectsFiles(refined);
        })();
        // eslint-disable-next-line
    }, []);

    let searchTime;
    function handleSearch(txt){
        clearTimeout(searchTime);
        searchTime = setTimeout(() => {
            const search = tempProjectFiles.current.filter((file) => { return file.path.toLowerCase().includes(txt.replaceAll(" ", "_").toLowerCase()) });

            setProjectsFiles(search);
        }, 250);
    }

    const icons = {
        java: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M9.14,18.56C9.14,18.56,8.23,19.09,9.78,19.27C11.66,19.49,12.62,19.46,14.69,19.06C14.69,19.06,15.24,19.41,16.0,19.71C11.36,21.72,5.49,19.59,9.14,18.56M8.57,15.93C8.57,15.93,7.55,16.69,9.11,16.85C11.12,17.06,12.7,17.08,15.44,16.55C15.44,16.55,15.82,16.94,16.42,17.15C10.8,18.81,4.55,17.28,8.57,15.93" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M13.35,11.48C14.49,12.81,13.05,14.01,13.05,14.01C13.05,14.01,15.96,12.49,14.62,10.59C13.38,8.82,12.42,7.94,17.6,4.9C17.6,4.9,9.47,6.95,13.35,11.48" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M19.5,20.5C19.5,20.5,20.17,21.07,18.76,21.5C16.08,22.31,7.6,22.57,5.24,21.53C4.39,21.16,5.99,20.64,6.48,20.53C7.01,20.42,7.3,20.44,7.3,20.44C6.36,19.76,1.22,21.76,4.69,22.33C14.16,23.88,21.95,21.62,19.5,20.5M9.57,13.21C9.57,13.21,5.26,14.24,8.04,14.62C9.22,14.78,11.57,14.75,13.75,14.56C15.53,14.41,17.32,14.08,17.32,14.08C17.32,14.08,16.7,14.36,16.24,14.67C11.86,15.83,3.4,15.29,5.84,14.1C7.9,13.1,9.57,13.21,9.57,13.21M17.31,17.59C21.76,15.25,19.7,13.0,18.27,13.3C17.91,13.37,17.75,13.43,17.75,13.43C17.75,13.43,17.89,13.23,18.13,13.14C20.98,12.13,23.17,16.12,17.22,17.7C17.22,17.7,17.29,17.64,17.31,17.59" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M14.62,0.0C14.62,0.0,17.09,2.5,12.29,6.33C8.44,9.41,11.41,11.16,12.29,13.16C10.04,11.11,8.39,9.31,9.49,7.63C11.12,5.16,15.62,3.96,14.63,0.0" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M10.01,23.92C14.28,24.2,20.84,23.77,21.0,21.73C21.0,21.73,20.7,22.5,17.47,23.12C13.82,23.81,9.32,23.73,6.66,23.29C6.66,23.29,7.2,23.74,10.01,23.92" strokeLinecap="round"/></svg>
    }

    return (
        <div className="pt-[1rem] w-full">
            <div className="flex flex-row justify-between opacity-60"><p>Side Projects</p><a href="https://github.com/AylexCODE/Side_Projects" target="_blank" rel="noreferrer" title="Redirect"><u>See all</u></a></div>
            <div className="w-full h-[12.5rem] border border-borderColor rounded-xl overflow-scroll">
                <div className="h-[2.5rem] w-full flex flex-row items-center sticky top-0 bg-componentsColor border-b border-borderColor">
                    <span className="absolute top-0 left-0">
                        <svg width="40px" height="40px" viewBox="0 0 40 40"><path fill="#000000" fill-opacity="0.0" stroke="#000000" strokeWidth="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M10.0,18.24C10.0,14.31,12.77,10.93,16.63,10.16C20.49,9.39,24.34,11.46,25.84,15.09C27.34,18.71,26.07,22.9,22.81,25.09C19.54,27.27,15.19,26.84,12.41,24.06C10.87,22.51,10.0,20.41,10.0,18.24Z" stroke-linecap="round"/><path fill="#000000" fill-opacity="0.0" stroke="#000000" strokeWidth="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M26.47,26.47C26.47,26.47,30.0,30.0,30.0,30.0" stroke-linecap="round"/></svg>
                    </span>
                    <input type="text" className="h-full w-full rounded-t-xl indent-[2.5rem]" onInput={(e) => {handleSearch(e.target.value)}} />
                </div>
                {projectsFiles ? (
                <ul className="[&>li>a]:flex [&>li>a]:flex-row [&>li>a]:items-center [&>li>a]:p-[0.5rem] [&>li>a]:gap-[0.5rem] [&>li>a]:overflow-scroll [&>li>a]:hover:bg-[#bdeeff] [&>li>a]:duration-300 [&>li>a]:ease-out [&_p]:text-nowrap">
                    {projectsFiles.map((file) => (
                        <li key={file.path}>
                            <NavLink to={`/projects/${file.path}`} target="_blank">
                                <span className="w-[24px]">{icons[file.type]}</span><p>{file.path.slice(0, -(file.type.length+1)).replaceAll("_", " ")}</p>
                            </NavLink>
                        </li>
                    ))}
                    {projectsFiles.length === 0 ? (
                        <div className="h-[9.5rem] w-full grid place-items-center">
                            <span>Error | No Projects Found!</span>
                        </div>
                    ) : (
                        <></>
                    )}
                </ul>
                ) : ( 
                <div className="h-full w-full grid place-items-center">
                    <span className="flex animate-ping rounded-max size-[1rem] bg-[#000]"></span>
                </div>
                )}
            </div>
        </div>
    )
}