import OctoKitRest from "./utilities/octoKit";
import hljs from "highlight.js"; import 'highlight.js/styles/atom-one-dark.min.css';
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function ProjectsFile(){
    const [content, setContent] = useState();
    const [type, setType] = useState();
    const filePath = useParams().file;
    const code = useRef(null);

    useEffect(() => {
        setType(filePath.split(".").findLast((type) => type));
        (async function(){
            const data = await new OctoKitRest().getSideProjectFile(filePath);
            
            setContent(data);
            setTimeout(() => {
                hljs.highlightAll();
                code.current.style.opacity = "1";
            }, 50);
        })();
        // eslint-disable-next-line
    }, []);

    const icons = {
        copyIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>,
        copySuccessIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.08008 15L8.03008 16.95L11.9201 13.05" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>,
        copyErrorIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M6.0,12.0C6.0,12.0,12.0,18.0,12.0,18.0C12.0,18.0,12.0,18.0,12.0,18.0Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M12.0,12.0C11.79,12.0,6.0,18.0,6.0,18.0C6.0,18.0,6.0,18.0,6.0,18.0Z" stroke-linecap="round"/><path fill="#000000" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M22.0,11.1C22.0,11.1,22.0,6.9,22.0,6.9C22.0,3.4,20.6,2.0,17.1,2.0C17.1,2.0,12.9,2.0,12.9,2.0C9.4,2.0,8.0,3.4,8.0,6.9C8.0,6.9,8.0,8.0,8.0,8.0C8.0,8.0,11.1,8.0,11.1,8.0C14.6,8.0,16.0,9.4,16.0,12.9C16.0,12.9,16.0,16.0,16.0,16.0C16.0,16.0,17.1,16.0,17.1,16.0C20.6,16.0,22.0,14.6,22.0,11.1Z" stroke-linecap="round"/><path fill="#000000" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M16.0,17.1C16.0,17.1,16.0,12.9,16.0,12.9C16.0,9.4,14.6,8.0,11.1,8.0C11.1,8.0,6.9,8.0,6.9,8.0C3.4,8.0,2.0,9.4,2.0,12.9C2.0,12.9,2.0,17.1,2.0,17.1C2.0,20.6,3.4,22.0,6.9,22.0C6.9,22.0,11.1,22.0,11.1,22.0C14.6,22.0,16.0,20.6,16.0,17.1Z" stroke-linecap="round"/></svg>,
        downloadIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" stroke="#292D32" fill="none"><path d="m8 12 4 4 4-4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16V4M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>,
        exitIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path d="M 18.697 7.857 C 18.988 7.589 9.951 16.543 10.3 16.2 M 18.7 16.2 C 19.03 16.543 9.951 7.494 10.3 7.8 Z M 15 3 L 11 3 C 8 3 8 3 5 7 L 2 11 C 1.4 11.8 1.4 12.3 2 13 L 5 17 C 8 21 8 21 11 21 L 21 21 C 22 21 23 20 23 19 L 23 5 C 23 4 22 3 21 3 Z" stroke="#292D32" stroke-width="1.5" fill="none"/></svg>,
        java: <svg width="24px" height="24px" viewBox="0 0 40 40"><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M14.84,30.93C14.84,30.93,13.34,31.82,15.91,32.12C19.02,32.48,20.62,32.43,24.05,31.77C24.05,31.77,24.95,32.35,26.21,32.85C18.52,36.2,8.79,32.65,14.84,30.93M13.9,26.55C13.9,26.55,12.21,27.82,14.79,28.09C18.12,28.44,20.74,28.47,25.29,27.58C25.29,27.58,25.92,28.23,26.91,28.58C17.6,31.35,7.24,28.8,13.9,26.55" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M21.83,19.13C23.72,21.35,21.33,23.35,21.33,23.35C21.33,23.35,26.15,20.82,23.93,17.65C21.87,14.7,20.28,13.23,28.86,8.17C28.86,8.17,15.4,11.59,21.83,19.13" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M32.01,34.17C32.01,34.17,33.12,35.11,30.78,35.83C26.34,37.19,12.29,37.61,8.39,35.88C6.98,35.26,9.62,34.4,10.44,34.22C11.31,34.03,11.8,34.06,11.8,34.06C10.24,32.94,1.72,36.26,7.47,37.21C23.16,39.8,36.08,36.04,32.01,34.17M15.56,22.02C15.56,22.02,8.42,23.74,13.03,24.37C14.98,24.64,18.87,24.58,22.48,24.27C25.44,24.01,28.41,23.47,28.41,23.47C28.41,23.47,27.37,23.93,26.61,24.45C19.36,26.39,5.34,25.49,9.37,23.5C12.79,21.83,15.56,22.02,15.56,22.02M28.38,29.31C35.76,25.41,32.35,21.66,29.97,22.16C29.38,22.29,29.12,22.39,29.12,22.39C29.12,22.39,29.34,22.05,29.75,21.9C34.46,20.22,38.09,26.87,28.23,29.5C28.23,29.5,28.35,29.4,28.38,29.31" strokeLinecap="round"/><path fill="#E76F00" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M23.93,0.0C23.93,0.0,28.02,4.16,20.06,10.55C13.68,15.68,18.6,18.6,20.06,21.94C16.33,18.52,13.6,15.51,15.43,12.71C18.12,8.6,25.58,6.6,23.94,0.0" strokeLinecap="round"/><path fill="#5382A1" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="0.0" strokeMiterlimit="10" d="M16.29,39.87C23.37,40.34,34.24,39.62,34.5,36.21C34.5,36.21,34.01,37.5,28.65,38.53C22.6,39.68,15.15,39.55,10.73,38.81C10.73,38.81,11.63,39.57,16.29,39.87" strokeLinecap="round"/></svg>
    };

    const [copyStatus, setCopyStatus] = useState(icons.copyIcon);

    function copyCode(){
        navigator.clipboard.writeText(content.content).then(() => {
            setCopyStatus(icons.copySuccessIcon);
        }).catch((e) => {
            setCopyStatus(icons.copyErrorIcon);
            console.log(`Copy to clipboard failed!\n${e}`);
        });
        
        setTimeout(() => {
            setCopyStatus(icons.copyIcon)
        }, 2500);
    }

    return (
        <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] grid m-[1rem] border border-borderColor rounded-xl bg-componentsColor">
            <div className="h-full w-full overflow-hidden rounded-xl">
                <div className="flex flex-row items-center justify-between p-[0.5rem]">
                    <span className="flex flex-row items-center overflow-scroll gap-[0.5rem]">{icons[type]}<p>{filePath}</p></span>
                    <span className="flex flex-row gap-[0.5rem] [&>button]:hover:[&>svg>path]:stroke-sideTextColorActive [&>button>svg>path]:duration-300 [&>button>svg>path]:ease-out">
                        <button onClick={() => {copyCode()}}>{copyStatus}</button>
                        {content ? (
                            <button><a href={`data:text/plain, ${content.content}`} download={filePath}>{icons.downloadIcon}</a></button>
                        ) : (
                            <button>{icons.downloadIcon}</button>
                        )}
                        <button onClick={() => {window.close()}}>{icons.exitIcon}</button>
                    </span>
                </div>
                <pre className="h-full w-full overflow-scroll pb-[1.5rem]">
                    {content ? (
                        <code ref={code} className="opacity-0">{content.content}</code>
                    ) : (
                        <code></code>
                    )}
                </pre>
            </div>
        </div>
    )
}