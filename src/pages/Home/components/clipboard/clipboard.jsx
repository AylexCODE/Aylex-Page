import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Clipboard(){
    const [text, setText] = useState();
    const txt = useRef(null);

    const clipboardStatus = useRef(null);
    const clipboardColorStatus = useRef(null);

    function statusIndicator(msg, color, status){
        clipboardStatus.current.innerHTML = msg;
        clipboardColorStatus.current.style.backgroundColor = color;

        if(status){
            setTimeout(() => {
                clipboardStatus.current.innerHTML = status;
            }, 2500);
        }
    }
    
    let isFetching = false;
    const controller = new AbortController();
    async function getClipboardData(){
        statusIndicator("Connecting", "yellow", false);
        isFetching = true;
        const options = {
            method: "GET",
            url: process.env.REACT_APP_SHARED_CLIPBOARD_API_URL,
            signal: controller.signal
        }
        
        try{
            const response = await axios(options);
            setText(response.data);
            statusIndicator("Connected", "green", false);
            isFetching = false;
        }catch(e){
            statusIndicator("Disconnected", "red", false);
            isFetching = false;
            console.log(e);
        }
    }

    async function postClipboardData(){
        statusIndicator("Saving", "yellow", false);
        isFetching = true;
        const options = {
            method: "POST",
            url: process.env.REACT_APP_SHARED_CLIPBOARD_API_URL,
            data: {
                text: txt.current.value
            },
            signal: controller.signal
        }
        
        try{
            const response = await axios(options);
            isFetching = false;

            statusIndicator("Saved", "Green", "Connected");
            console.log(response);
        }catch(e){
            isFetching = false;

            statusIndicator("Saving failed", "red", false);

            setTimeout(() => {
                statusIndicator("Connected", "green", false);
            }, 2500);
            console.log(e);
        }
    }

    async function cancelGetClipboardData(){
        if(isFetching) controller.abort();

        setTimeout(() => getClipboardData(), 500);
    }

    useEffect(() => {
        getClipboardData();
        // eslint-disable-next-line
    }, []);

    const icons = {
        copyIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        copySuccessIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.08008 15L8.03008 16.95L11.9201 13.05" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        copyErrorIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#000000" fillOpacity="0.0" stroke="#292D32" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M6.0,12.0C6.0,12.0,12.0,18.0,12.0,18.0C12.0,18.0,12.0,18.0,12.0,18.0Z" strokeLinecap="round"/><path fill="#FFFFFF" fillOpacity="0.0" stroke="#292D32" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M12.0,12.0C11.79,12.0,6.0,18.0,6.0,18.0C6.0,18.0,6.0,18.0,6.0,18.0Z" strokeLinecap="round"/><path fill="#000000" fillOpacity="0.0" stroke="#292D32" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M22.0,11.1C22.0,11.1,22.0,6.9,22.0,6.9C22.0,3.4,20.6,2.0,17.1,2.0C17.1,2.0,12.9,2.0,12.9,2.0C9.4,2.0,8.0,3.4,8.0,6.9C8.0,6.9,8.0,8.0,8.0,8.0C8.0,8.0,11.1,8.0,11.1,8.0C14.6,8.0,16.0,9.4,16.0,12.9C16.0,12.9,16.0,16.0,16.0,16.0C16.0,16.0,17.1,16.0,17.1,16.0C20.6,16.0,22.0,14.6,22.0,11.1Z" strokeLinecap="round"/><path fill="#000000" fillOpacity="0.0" stroke="#292D32" strokeWidth="1.5" strokeOpacity="1.0" strokeMiterlimit="10" d="M16.0,17.1C16.0,17.1,16.0,12.9,16.0,12.9C16.0,9.4,14.6,8.0,11.1,8.0C11.1,8.0,6.9,8.0,6.9,8.0C3.4,8.0,2.0,9.4,2.0,12.9C2.0,12.9,2.0,17.1,2.0,17.1C2.0,20.6,3.4,22.0,6.9,22.0C6.9,22.0,11.1,22.0,11.1,22.0C14.6,22.0,16.0,20.6,16.0,17.1Z" strokeLinecap="round"/></svg>,
        pasteIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M8.33,6.16C8.33,6.16,15.67,6.16,15.67,6.16C16.02,6.16,16.32,5.88,16.32,5.54C16.32,5.54,16.32,3.67,16.32,3.67C16.32,2.74,15.54,2.0,14.59,2.0C14.59,2.0,9.41,2.0,9.41,2.0C8.46,2.0,7.68,2.74,7.68,3.67C7.68,3.67,7.68,5.54,7.68,5.54C7.68,5.88,7.98,6.16,8.33,6.16Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M19.77,3.67C19.77,3.67,18.69,3.67,18.69,3.67C18.35,3.67,18.05,3.95,18.05,4.3C18.05,4.3,18.05,6.16,18.05,6.16C18.05,7.09,17.27,7.84,16.32,7.84C16.32,7.84,7.68,7.84,7.68,7.84C6.73,7.84,5.95,7.09,5.95,6.16C5.95,6.16,5.95,4.3,5.95,4.3C5.95,3.95,5.65,3.67,5.31,3.67C5.31,3.67,4.23,3.67,4.23,3.67C3.28,3.67,2.5,4.42,2.5,5.33C2.5,5.33,2.5,20.33,2.5,20.33C2.5,21.26,3.28,22.0,4.23,22.0C4.23,22.0,19.77,22.0,19.77,22.0C20.72,22.0,21.5,21.26,21.5,20.33C21.5,20.33,21.5,5.33,21.5,5.33C21.5,4.42,20.72,3.67,19.77,3.67Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M7.04,12.13C6.26,12.13,7.04,12.13,7.04,12.13C7.04,12.13,18.51,12.13,17.22,12.14C17.22,12.14,7.04,12.13,7.04,12.13Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M7.04,16.74C6.26,16.74,7.04,16.74,7.04,16.74C7.04,16.74,18.51,16.74,17.22,16.75C17.22,16.75,7.04,16.74,7.04,16.74Z" stroke-linecap="round"/></svg>,
        pasteSuccessIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M8.33,6.16C8.33,6.16,15.67,6.16,15.67,6.16C16.02,6.16,16.32,5.88,16.32,5.54C16.32,5.54,16.32,3.67,16.32,3.67C16.32,2.74,15.54,2.0,14.59,2.0C14.59,2.0,9.41,2.0,9.41,2.0C8.46,2.0,7.68,2.74,7.68,3.67C7.68,3.67,7.68,5.54,7.68,5.54C7.68,5.88,7.98,6.16,8.33,6.16Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M19.77,3.67C19.77,3.67,18.69,3.67,18.69,3.67C18.35,3.67,18.05,3.95,18.05,4.3C18.05,4.3,18.05,6.16,18.05,6.16C18.05,7.09,17.27,7.84,16.32,7.84C16.32,7.84,7.68,7.84,7.68,7.84C6.73,7.84,5.95,7.09,5.95,6.16C5.95,6.16,5.95,4.3,5.95,4.3C5.95,3.95,5.65,3.67,5.31,3.67C5.31,3.67,4.23,3.67,4.23,3.67C3.28,3.67,2.5,4.42,2.5,5.33C2.5,5.33,2.5,20.33,2.5,20.33C2.5,21.26,3.28,22.0,4.23,22.0C4.23,22.0,19.77,22.0,19.77,22.0C20.72,22.0,21.5,21.26,21.5,20.33C21.5,20.33,21.5,5.33,21.5,5.33C21.5,4.42,20.72,3.67,19.77,3.67Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M8.94,14.79C8.94,14.79,10.89,16.74,10.89,16.74C10.89,16.74,14.78,12.84,14.78,12.84" stroke-linecap="round"/></svg>,
        pasteErrorIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M8.33,6.16C8.33,6.16,15.67,6.16,15.67,6.16C16.02,6.16,16.32,5.88,16.32,5.54C16.32,5.54,16.32,3.67,16.32,3.67C16.32,2.74,15.54,2.0,14.59,2.0C14.59,2.0,9.41,2.0,9.41,2.0C8.46,2.0,7.68,2.74,7.68,3.67C7.68,3.67,7.68,5.54,7.68,5.54C7.68,5.88,7.98,6.16,8.33,6.16Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M19.77,3.67C19.77,3.67,18.69,3.67,18.69,3.67C18.35,3.67,18.05,3.95,18.05,4.3C18.05,4.3,18.05,6.16,18.05,6.16C18.05,7.09,17.27,7.84,16.32,7.84C16.32,7.84,7.68,7.84,7.68,7.84C6.73,7.84,5.95,7.09,5.95,6.16C5.95,6.16,5.95,4.3,5.95,4.3C5.95,3.95,5.65,3.67,5.31,3.67C5.31,3.67,4.23,3.67,4.23,3.67C3.28,3.67,2.5,4.42,2.5,5.33C2.5,5.33,2.5,20.33,2.5,20.33C2.5,21.26,3.28,22.0,4.23,22.0C4.23,22.0,19.77,22.0,19.77,22.0C20.72,22.0,21.5,21.26,21.5,20.33C21.5,20.33,21.5,5.33,21.5,5.33C21.5,4.42,20.72,3.67,19.77,3.67Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M9.0,11.8C9.0,11.8,15.0,17.8,15.0,17.8C15.0,17.8,15.0,17.8,15.0,17.8C15.0,17.8,9.0,11.8,9.0,11.8Z" stroke-linecap="round"/><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M15.0,11.8C13.22,13.57,9.0,17.8,9.0,17.8C9.0,17.8,9.0,17.8,9.0,17.8C9.0,17.8,15.0,11.8,15.0,11.8Z" stroke-linecap="round"/></svg>,
        saveIcon: <svg width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#292D32" stroke-width="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M4.0,2.65C3.27,2.68,2.68,3.2,2.68,3.95C2.68,3.95,2.68,20.0,2.68,20.0C2.68,21.0,3.2,21.45,4.0,21.45C4.0,21.45,20.0,21.45,20.0,21.45C20.8,21.45,21.36,20.8,21.36,20.0C21.36,20.0,21.36,5.56,21.36,5.56C21.36,5.56,18.48,2.65,18.48,2.65C18.48,2.65,4.0,2.65,4.0,2.65M6.58,2.65C6.58,2.65,6.58,7.21,6.58,7.21C6.58,7.6,6.8,7.89,7.2,7.89C7.2,7.89,16.74,7.89,16.74,7.89C17.2,7.89,17.46,7.6,17.46,7.21C17.46,7.21,17.46,2.65,17.46,2.65C17.46,2.65,6.58,2.65,6.58,2.65M9.2,2.65C9.2,2.65,9.2,7.89,9.2,7.89C9.2,7.89,9.2,2.65,9.2,2.65M6.6,21.46C6.6,21.46,6.6,14.2,6.6,14.2C6.6,13.86,6.76,13.55,7.22,13.55C7.22,13.55,16.76,13.55,16.76,13.55C17.2,13.55,17.44,13.8,17.44,14.2C17.44,14.2,17.44,21.45,17.44,21.45C17.44,21.45,6.6,21.46,6.6,21.46M17.44,16.0C17.44,16.0,6.6,16.0,6.6,16.0C6.6,16.0,17.44,16.0,17.44,16.0M6.6,18.66C6.6,18.66,17.44,18.66,17.44,18.66Z" stroke-linecap="round"/></svg>,
        exitIcon: <svg width="24px" height="24px" viewBox="0 0 24 24"><path d="M 18.697 7.857 C 18.988 7.589 9.951 16.543 10.3 16.2 M 18.7 16.2 C 19.03 16.543 9.951 7.494 10.3 7.8 Z M 15 3 L 11 3 C 8 3 8 3 5 7 L 2 11 C 1.4 11.8 1.4 12.3 2 13 L 5 17 C 8 21 8 21 11 21 L 21 21 C 22 21 23 20 23 19 L 23 5 C 23 4 22 3 21 3 Z" stroke="#292D32" strokeWidth="1.5" fill="none"/></svg>
    };

    const [copyStatus, setCopyStatus] = useState(icons.copyIcon);
    const [pasteStatus, setPasteStatus] = useState(icons.pasteIcon);

    function copyClipboard(){
        navigator.clipboard.writeText(text).then(() => {
            setCopyStatus(icons.copySuccessIcon);
        }).catch((e) => {
            setCopyStatus(icons.copyErrorIcon);
            console.log(`Copy to clipboard failed!\n${e}`);
        });

        setTimeout(() => {
            setCopyStatus(icons.copyIcon);
        }, 2500);
    }

    function pasteClipboard(){
        navigator.clipboard.readText().then((text) => {
            setText(text);
            setPasteStatus(icons.pasteSuccessIcon);
        }).catch((e) => {
            setPasteStatus(icons.pasteErrorIcon);
            console.log(`Paste from clipboard failed!\n${e}`);
        });
        
        setTimeout(() => {
            setPasteStatus(icons.pasteIcon);
        }, 2500);
    }
    
    function saveClipboard(){
        if(isFetching) controller.abort();
        
        postClipboardData();
    }

    return (
        <main className="h-dvh w-dvw overflow-hidden">
            <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] m-[1rem] overflow-hidden border border-borderColor rounded-xl bg-componentsColor">
                <div className="flex flex-row items-center justify-between p-[0.5rem]">
                    <span className="flex flex-row items-center gap-[0.5rem] overflow-hidden [&>p]:text-[0.75rem] [&>p]:opacity-50">
                        <div className="font-bold text-nowrap overflow-scroll">SHARED CLIPBOARD</div>
                        <button ref={clipboardColorStatus} onClick={()=>{cancelGetClipboardData()}} className="block flex size-[0.5rem] bg-yellow-500 rounded-max"></button>
                        <p ref={clipboardStatus}>Connecting</p>
                    </span>
                    <span className="flex flex-row gap-[0.5rem] pl-[0.5rem] [&>button]:hover:[&_path]:stroke-sideTextColorActive [&>button>svg>path]:duration-300 [&>button>svg>path]:ease-out">
                        <button title="Copy" onClick={()=>{copyClipboard()}}>{copyStatus}</button>
                        <button title="Paste" onClick={()=>{pasteClipboard()}}>{pasteStatus}</button>
                        <button title="Save" onClick={()=>{saveClipboard()}}>{icons.saveIcon}</button>
                        <button title="Close" onClick={()=>{window.close()}}>{icons.exitIcon}</button>
                    </span>
                </div>
                <pre className="h-[calc(100%-2.5rem)] w-full overflow-hidden border-t border-borderColor">
                    {text ? (
                        <textarea ref={txt} className="h-full w-full resize-none rounded-b-xl p-[0.5rem]" value={text}></textarea>
                    ) : (
                        <p></p>
                    )}
                </pre>
            </div>
        </main>
    )
}