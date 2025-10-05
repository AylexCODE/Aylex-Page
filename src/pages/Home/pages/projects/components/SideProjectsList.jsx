import OctoKitRest from "../utilities/octoKit";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideProjectsList(){
    const [projectsFiles, setProjectsFiles] = useState([]);

    useEffect(() => {
        (async function(){
            const data = await new OctoKitRest().getSideProjectsFiles();
            const refined = data.map((file) => {
                return {
                    path: file,
                    type: file.split(".").findLast((type) => type)
                }
            });
            
            setProjectsFiles(refined);
        })();
        // eslint-disable-next-line
    }, []);

    const icons = {
        java: <svg width="24px" height="24px" viewBox="0 0 40 40"><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M14.84,30.93C14.84,30.93,13.34,31.82,15.91,32.12C19.02,32.48,20.62,32.43,24.05,31.77C24.05,31.77,24.95,32.35,26.21,32.85C18.52,36.2,8.79,32.65,14.84,30.93M13.9,26.55C13.9,26.55,12.21,27.82,14.79,28.09C18.12,28.44,20.74,28.47,25.29,27.58C25.29,27.58,25.92,28.23,26.91,28.58C17.6,31.35,7.24,28.8,13.9,26.55" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M21.83,19.13C23.72,21.35,21.33,23.35,21.33,23.35C21.33,23.35,26.15,20.82,23.93,17.65C21.87,14.7,20.28,13.23,28.86,8.17C28.86,8.17,15.4,11.59,21.83,19.13" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M32.01,34.17C32.01,34.17,33.12,35.11,30.78,35.83C26.34,37.19,12.29,37.61,8.39,35.88C6.98,35.26,9.62,34.4,10.44,34.22C11.31,34.03,11.8,34.06,11.8,34.06C10.24,32.94,1.72,36.26,7.47,37.21C23.16,39.8,36.08,36.04,32.01,34.17M15.56,22.02C15.56,22.02,8.42,23.74,13.03,24.37C14.98,24.64,18.87,24.58,22.48,24.27C25.44,24.01,28.41,23.47,28.41,23.47C28.41,23.47,27.37,23.93,26.61,24.45C19.36,26.39,5.34,25.49,9.37,23.5C12.79,21.83,15.56,22.02,15.56,22.02M28.38,29.31C35.76,25.41,32.35,21.66,29.97,22.16C29.38,22.29,29.12,22.39,29.12,22.39C29.12,22.39,29.34,22.05,29.75,21.9C34.46,20.22,38.09,26.87,28.23,29.5C28.23,29.5,28.35,29.4,28.38,29.31" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M23.93,0.0C23.93,0.0,28.02,4.16,20.06,10.55C13.68,15.68,18.6,18.6,20.06,21.94C16.33,18.52,13.6,15.51,15.43,12.71C18.12,8.6,25.58,6.6,23.94,0.0" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M16.29,39.87C23.37,40.34,34.24,39.62,34.5,36.21C34.5,36.21,34.01,37.5,28.65,38.53C22.6,39.68,15.15,39.55,10.73,38.81C10.73,38.81,11.63,39.57,16.29,39.87" strokeLinecap="round"/></svg>,
        javascript: <svg width="24px" height="24px" viewBox="0 0 40 40"><path fill="#F7DF1E" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M0.0,0.0C0.0,0.0,40.0,0.0,40.0,0.0C40.0,0.0,40.0,40.0,40.0,40.0C40.0,40.0,0.0,40.0,0.0,40.0C0.0,40.0,0.0,0.0,0.0,0.0Z" strokeLinecap="round"/><path fill="#000000" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M10.52,33.43C10.52,33.43,13.58,31.57,13.58,31.57C14.17,32.62,14.71,33.51,15.99,33.51C17.23,33.51,18.01,33.02,18.01,31.14C18.01,31.14,18.01,18.36,18.01,18.36C18.01,18.36,21.77,18.36,21.77,18.36C21.77,18.36,21.77,31.2,21.77,31.2C21.77,35.09,19.48,36.86,16.15,36.86C13.15,36.86,11.4,35.3,10.52,33.42M23.81,33.02C23.81,33.02,26.87,31.25,26.87,31.25C27.68,32.57,28.72,33.53,30.58,33.53C32.13,33.53,33.13,32.76,33.13,31.68C33.13,30.39,32.11,29.94,30.39,29.18C30.39,29.18,29.45,28.78,29.45,28.78C26.74,27.63,24.94,26.18,24.94,23.12C24.94,20.3,27.09,18.15,30.44,18.15C32.83,18.15,34.55,18.98,35.79,21.16C35.79,21.16,32.86,23.04,32.86,23.04C32.21,21.88,31.52,21.42,30.44,21.42C29.34,21.42,28.64,22.12,28.64,23.04C28.64,24.16,29.34,24.62,30.95,25.32C30.95,25.32,31.89,25.72,31.89,25.72C35.09,27.09,36.89,28.49,36.89,31.63C36.89,35.01,34.23,36.86,30.66,36.86C27.17,36.86,24.91,35.2,23.81,33.02" strokeLinecap="round"/></svg>
    }

    return (
        <div className="pt-[1rem] w-full">
            <p className="opacity-60">Side Projects</p>
            <div className="w-full max-h-[10rem] border border-borderColor rounded-xl overflow-scroll">
            {projectsFiles ? (
            <ul className="[&>li>a]:flex [&>li>a]:flex-row [&>li>a]:items-center [&>li>a]:p-[0.5rem] [&>li>a]:gap-[0.5rem] [&>li>a]:hover:bg-[#bdeeff] [&>li>a]:duration-300 [&>li>a]:ease-out">
                {projectsFiles.map((file) => (
                    <li key={file.path}>
                        <NavLink to={`/projects/${file.path}`} target="_blank">
                            {icons[file.type]}{file.path.slice(0, -(file.type.length+1)).replaceAll("_", " ")}
                        </NavLink>
                    </li>
                ))}
            </ul>
            ) : ( 
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
}