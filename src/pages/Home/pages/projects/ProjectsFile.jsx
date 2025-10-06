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
        java: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#5382A1" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M9.14,18.56C9.14,18.56,8.23,19.09,9.78,19.27C11.66,19.49,12.62,19.46,14.69,19.06C14.69,19.06,15.24,19.41,16.0,19.71C11.36,21.72,5.49,19.59,9.14,18.56M8.57,15.93C8.57,15.93,7.55,16.69,9.11,16.85C11.12,17.06,12.7,17.08,15.44,16.55C15.44,16.55,15.82,16.94,16.42,17.15C10.8,18.81,4.55,17.28,8.57,15.93" stroke-linecap="round"/><path fill="#E76F00" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M13.35,11.48C14.49,12.81,13.05,14.01,13.05,14.01C13.05,14.01,15.96,12.49,14.62,10.59C13.38,8.82,12.42,7.94,17.6,4.9C17.6,4.9,9.47,6.95,13.35,11.48" stroke-linecap="round"/><path fill="#5382A1" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M19.5,20.5C19.5,20.5,20.17,21.07,18.76,21.5C16.08,22.31,7.6,22.57,5.24,21.53C4.39,21.16,5.99,20.64,6.48,20.53C7.01,20.42,7.3,20.44,7.3,20.44C6.36,19.76,1.22,21.76,4.69,22.33C14.16,23.88,21.95,21.62,19.5,20.5M9.57,13.21C9.57,13.21,5.26,14.24,8.04,14.62C9.22,14.78,11.57,14.75,13.75,14.56C15.53,14.41,17.32,14.08,17.32,14.08C17.32,14.08,16.7,14.36,16.24,14.67C11.86,15.83,3.4,15.29,5.84,14.1C7.9,13.1,9.57,13.21,9.57,13.21M17.31,17.59C21.76,15.25,19.7,13.0,18.27,13.3C17.91,13.37,17.75,13.43,17.75,13.43C17.75,13.43,17.89,13.23,18.13,13.14C20.98,12.13,23.17,16.12,17.22,17.7C17.22,17.7,17.29,17.64,17.31,17.59" stroke-linecap="round"/><path fill="#E76F00" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M14.62,0.0C14.62,0.0,17.09,2.5,12.29,6.33C8.44,9.41,11.41,11.16,12.29,13.16C10.04,11.11,8.39,9.31,9.49,7.63C11.12,5.16,15.62,3.96,14.63,0.0" stroke-linecap="round"/><path fill="#5382A1" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M10.01,23.92C14.28,24.2,20.84,23.77,21.0,21.73C21.0,21.73,20.7,22.5,17.47,23.12C13.82,23.81,9.32,23.73,6.66,23.29C6.66,23.29,7.2,23.74,10.01,23.92" stroke-linecap="round"/></svg>
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
        <main className="h-dvh w-dvw overflow-hidden">
            <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] m-[1rem] overflow-hidden border border-borderColor rounded-xl bg-componentsColor">
                <div className="flex flex-row items-center justify-between p-[0.5rem]">
                    <span className="w-[24px]">{icons[type]}</span>
                    <div className="overflow-scroll w-full ml-[0.5rem]">{filePath}</div>
                    <span className="flex flex-row gap-[0.5rem] pl-[0.5rem] [&>button]:hover:[&_path]:stroke-sideTextColorActive [&>button>svg>path]:duration-300 [&>button>svg>path]:ease-out">
                        <button onClick={() => {copyCode()}} title="Copy code to clipboard">{copyStatus}</button>
                        {content ? (
                            <button title={`Download ${filePath}`}><a href={`data:text/plain, ${content.content}`} download={filePath}>{icons.downloadIcon}</a></button>
                        ) : (
                            <button>{icons.downloadIcon}</button>
                        )}
                        <button onClick={() => {window.close()}} title="Close">{icons.exitIcon}</button>
                    </span>
                </div>
                <pre className="h-full w-full overflow-scroll pb-[2rem]">
                    {content ? (
                        <code ref={code} className="opacity-0">{content.content}</code>
                    ) : (
                        <code></code>
                    )}
                </pre>
            </div>
        </main>
    )
}