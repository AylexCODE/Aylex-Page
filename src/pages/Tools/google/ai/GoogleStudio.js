import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

import BurgerMenu from "../../../Home/components/menu/BurgerMenu.jsx";
// import googleGenAI from './utilities/googleGenAI.js';

export default function GoogleStudio(){
    const [navState, setNavState] = useState(false);
    const [prompt, setPrompt] = useState('');
    // eslint-disable-next-line
    const [model, setModel] = useState("gemini-2.5-pro");
    // eslint-disable-next-line
    const [convo, updateConvo] = useState([]);
    const promptRef = useRef(null);
    const sendBtn = useRef(null);

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    useEffect(() => {
        if (promptRef.current) {
            promptRef.current.style.height = 'auto';
            if(promptRef.current.scrollHeight === 48){
                promptRef.current.style.height = '1.5rem';
            }else if(promptRef.current.scrollHeight > 264){
                promptRef.current.style.height = '264px';
            }else{
                promptRef.current.style.height = promptRef.current.scrollHeight + 'px';
            }
        }
    }, [prompt]);

    async function sendPrompt(){
        if(prompt.trim() === "") return;
        sendBtn.current.disabled = true;
        sendBtn.current.style.opacity = "0.6";
        const addResponse = { type: "AI", response: "" };
        updateConvo(convo => [...convo, addResponse]);
        // const ai = await googleGenAI(model, "Explain how AI works in a few words");
        // updateConvo(convo => [...convo, {'ai': ai}]);
        // console.log(convo, ai);  
        const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GOOGLE_AI_API_KEY});
        const response = await ai.models.generateContentStream({
            model: model, //"gemini-2.5-flash",
            contents: prompt,
        });
        for await(const chunk of response){
            updateConvo(convo => {
                const lastConvo = convo.length - 1;
                const lastObject = convo[lastConvo];
                
                const updatedLastConvo = {
                    ...lastObject,
                    response: `${lastObject.response}${chunk.text}` 
                };
                
                return [...convo.slice(0, lastConvo), updatedLastConvo];
            });
        }
        
        setPrompt("");
        sendBtn.current.disabled = false;
        sendBtn.current.style.opacity = "1";
    }


    return (
        <main className="h-dvh w-dvw overflow-hidden">
            <div className="relative h-[calc(100%-2rem)] w-[calc(100%-2rem)] m-[1rem] overflow-hidden border border-black rounded-xl bg-componentsColor">
                <div className="h-[3rem] flex flex-row items-center justify-between px-[1rem] border-b border-black">
                    <h1 className="font-bold text-nowrap">Chat prompt</h1>
                    <button className="w-[2rem] h-[1.5rem]" onClick={() => { navState === false ? setNavState(true) : setNavState(false) }}>
                        <BurgerMenu state={navState} />
                    </button>
                </div>
                <section className="w-full h-[calc(100%-7.5rem)] px-[1rem] py-[0.5rem] overflow-y-scroll text-sm [&_pre]:whitespace-pre-wrap [&_pre]:break-normal">
                    <ul>
                        {convo.map((convo, index) => (
                        <li key={index}><pre>
                            <ReactMarkdown>{convo.response}</ReactMarkdown>
                        </pre></li>
                        ))}
                    </ul>
                </section>
                <div className="absolute bottom-[0.75rem] w-[calc(100%-1.5rem)] left-[0.75rem] flex flex-row items-center justify-between gap-[0.5rem] p-[0.5rem] border border-borderColor rounded-4xl">
                    <textarea ref={promptRef} value={prompt} onChange={handleChange} className="w-full h-[1.5rem] outline-none resize-none px-[0.5rem]"></textarea>
                    <span className="flex flex-row gap-[0.5rem] self-end">
                        <button ref={sendBtn} onClick={() => {sendPrompt()}} className="py-[0.5rem] px-[1rem] bg-black text-white font-medium rounded-3xl cursor-pointer">Send</button>
                    </span>
                </div>
            </div>
        </main>
    )
}