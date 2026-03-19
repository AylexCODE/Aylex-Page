import React, { useEffect, useRef, useState } from 'react';
import Breakpoints from "../../../../../features/customBreakpoint";
import axios from 'axios';

export default function Vision(){
    const [connectionStatus, setConnectionStatus] = useState("CONNECTING");
    const [messages, addMessages] = useState([{type: "bot", message: "Hi! I'm Vision. Chat with me or teach me something new!", intent: "greeting", source: "fallback"}]);
    const [nlp, setNlp] = useState(null);
    const [viewStats, setViewStats] = useState(false);
    const [stats, setStats] = useState(null);

    const [isTyping, setIsTyping] = useState(false);

    const [breakpoint, setBreakpoint] = useState(0);
    Breakpoints(setBreakpoint);

    const messageRef = useRef(null);

    async function sendMessage(content){
        if(messageRef.current.value.trim() !== ""){
            messageRef.current.value = "";
            const storedMessages = messages;
            storedMessages.push(content);

            addMessages(storedMessages);
            setIsTyping(true);

            const options = {
                method: "POST",
                url: `${process.env.REACT_APP_VISION_BOT_API_URL}/chat/detailed`,
                data: {
                    message: content.message
                }
            }
            
            try{
                const res = await axios(options);
                storedMessages.push({
                    type: "bot",
                    message: res.data.response,
                    intent: res.data.nlp.intent,
                    source: res.data.source
                });

                addMessages(storedMessages);
                setIsTyping(false);
                calculateNLP(res.data.nlp);
            }catch(e){
                setIsTyping(false);
                storedMessages.push({
                    type: "bot",
                    message: "Could not reach the server. Is it running?",
                    intent: "question",
                    source:"fallback"
                });
                addMessages(storedMessages);
            }
        }
    }

    async function getStats() {
        const constructedStats = {
            conversations: [],
            topIntents: []
        };

        const options = {
            method: "GET",
            url: `${process.env.REACT_APP_VISION_BOT_API_URL}/stats`
        }
        
        try{
            const res = await axios(options);
            Object.entries(res.data.conversations).forEach(d => {
                const s = d[0].replace("total_", '').replace("_", " ");
                constructedStats.conversations.push({
                    label: s[0].toUpperCase() + s.slice(1, s.length),
                    value: d[1]
                });
            });
            constructedStats.topIntents = res.data.topIntents;
            setStats(constructedStats);
        }catch(e){
            // console.log(e);
        }
    }

    function calculateNLP(nlp) {
        const constructedNlp = {
            items: [],
            hitKeywords: [],
            keywords: [],
            sentiment: nlp.sentiment || 0
        };

        const sorted = Object.entries(nlp.confidence || {})
            .filter(([, v]) => v > 0)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        const total = sorted.reduce((s, [, v]) => s + v, 0) || 1;
        constructedNlp.items = sorted.map(([k, v]) => {
            const pct = Math.round((v / total) * 100);
            return ({
                label: k.replace('_', ' '),
                pct: pct
            });
        });

        if(nlp?.tokens){
            nlp.tokens.forEach(t => {
                if((nlp.hitKeywords || []).includes(t)){
                    constructedNlp.hitKeywords.push(t);
                }else{
                    constructedNlp.keywords.push(t);
                }
            });
        }

        setNlp(constructedNlp);
    }

    useEffect(() => {
        (async()=>{
            try{
                await axios({method: "GET", url: `${process.env.REACT_APP_VISION_BOT_API_URL}`});
                setConnectionStatus("ONLINE");
            }catch(e){
                setConnectionStatus("OFFLINE");
            }
        })();
        // eslint-disable-next-line
    }, []);

    return (
        <main className="h-dvh w-dvw overflow-hidden bg-[#F8F8F3] ">
            <header className="h-[50px] flex flex-row justify-between items-center px-[24px] py-[14px] border-b-[4px] border-[#111111] bg-white">
                <img src="%PUBLIC_URL%/../assets/bot/vision/logo/Vision_BOT_logo.png" height={25} width={25} className="rounded-max" alt="VisionLogo"></img>
                <p className="flex flex-row items-center justify-center gap-[8px] text-[12px]"><span className="size-[8px] bg-[#111111] rounded-max"></span>{connectionStatus}</p>
            </header>
            <div className={`h-[calc(100dvh-50px)] overflow-x-hidden ${breakpoint  < 768 ? "overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:bg-[#F7F6F3] [&::-webkit-scrollbar-track]:border-borderColor [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-[#111111]" : "overflow-y-hidden"}`}>
                <div className={`flex w-[100dvw] gap-[18px] bg-white p-[20px] overflow-hidden ${breakpoint < 768 ? "h-[calc(200dvh-550px)] flex-col" : "h-[calc(100dvh-50px)] flex-row"}`}>
                    <section className={`flex flex-col bg-white border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px] ${breakpoint  < 768 ? "h-[calc(100dvh-90px)]" : "flex-1"}`}>
                        <span className="flex flex-1 flex-col p-[20px] gap-[14px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:bg-[#F7F6F3] [&::-webkit-scrollbar-track]:border-borderColor [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-[#111111]">
                            {
                                messages.map((msg, index) => (
                                    <span key={`msg${index}`} className={`flex items-end gap-[8px] ${msg.type === "bot" ? "flex-row" : "flex-row-reverse flex-end"}`}>
                                        <p className={`flex items-center justify-center size-[30px] shrink-0 font-bold text-[12px] ${msg.type === "bot" ? "text-[#111111] bg-[#F7F6F3]" : "text-[#F7F6F3] bg-[#111111]"}`}>{msg.type === "bot" ? "V" : "U"}</p>
                                        <span className="max-w-[72%] flex flex-col">
                                            <p className={`border-[2px] border-[#111111] text-[14px] px-[15px] py-[11px] leading-[1.6] ${msg.type === "bot" ? "text-[#111111] bg-[#F7F6F3]" : "text-[#F7F6F3] bg-[#111111]"}`}>{msg.message}</p>
                                            {
                                                msg.type === "bot" ? (
                                                    <span className="flex flex-row flex-wrap gap-[8px] mt-[5px]">
                                                        <p className="text-[#111111] bg-[#F7F6F3] py-[2px] px-[8px] text-[11px] font-mono">{msg.intent}</p>
                                                        <p className="text-[#6B6B66] py-[2px] px-[8px] text-[11px] font-mono">{msg.source}</p>
                                                    </span>
                                                ) : null
                                            }
                                        </span>
                                    </span>
                                ))
                            }
                            {
                                isTyping && (
                                    <span className="flex items-end gap-[8px] flex-row">
                                        <p className="flex items-center justify-center size-[30px] shrink-0 font-bold text-[12px] text-[#111111] bg-[#F7F6F3]">V</p>
                                        <span className="max-w-[72%] flex flex-col">
                                            <p className="flex flex-row gap-[4px] items-center border-[2px] border-[#111111] text-[14px] px-[15px] py-[11px] leading-[1.6] text-[#111111] bg-[#F7F6F3]">
                                                <span className="animate-[bounce_1.2s_linear_infinite_alternate] block size-[6px] bg-[#6B6B66]"></span>
                                                <span className="animate-[bounce_1.2s_linear_infinite_0.2s_alternate] block size-[6px] bg-[#6B6B66]"></span>
                                                <span className="animate-[bounce_1.2s_linear_infinite_0.4s_alternate] block size-[6px] bg-[#6B6B66]"></span>
                                            </p>
                                        </span>
                                    </span>
                                )
                            }
                        </span>
                        <span className="flex flex-row p-[14px] gap-[8px] border-t border-t-[#111111]">
                            <input ref={messageRef} type="text" autoComplete="false" placeholder="Type a message..." onKeyDown={(event) => {if(event.key === "Enter")sendMessage({type: "user", message: messageRef.current.value})}} className="flex-1 text-[14px] py-[10px] px-[14px] outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></input>
                            <button className="py-[10px] px-[20px] bg-[#111111] text-[14px] font-bold cursor-pointer text-white" onClick={() => {sendMessage({type: "user", message: messageRef.current.value})}}>Send</button>
                        </span>
                    </section>
                    <section className={`flex flex-col gap-[14px] [&>span]:p-[14px] [&>span]:border-[#111111] [&>span]:border-t-[2px] [&>span]:border-r-[4px] [&>span]:border-b-[4px] [&>span]:border-l-[2px] ${breakpoint  < 768 ? "flex-1" : "w-[270px]"}`}>
                        <span>
                            <p className="mb-[12px] font-bold font-mono text-[10px] tracking-[0.08em]">NLP ANALYSIS</p>
                            {
                                nlp === null ? (
                                    <p className="text-[13px] text-[#6B6B66]">Send a message to see analysis.</p>
                                ) : (
                                    <>
                                        <div className="flex flex-col">
                                            <span className="flex flex-row justify-between mb-[10px] text-[#6B6B66] text-[12px]">
                                                <p>Sentiment</p>
                                                <p>{nlp.sentiment}</p>
                                            </span>
                                        </div>
                                        {
                                            nlp.items.length > 0 ? (
                                                nlp.items.map((d, i) => (
                                                    <div key={`nlp${i}`} className="flex flex-col">
                                                        <span className="flex flex-row justify-between items-center mb-[10px] text-[#6B6B66] text-[12px]">
                                                            <p>{d.label}</p>
                                                            <span className="block w-[90px] h-[4px]">
                                                                <span className="block bg-[#111111] h-[4px]" style={{width: `${d.pct}%`}}></span>
                                                            </span>
                                                            <p>{d.pct}%</p>
                                                        </span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-[12px] text-[#6B6B66] font-mono">No patterns matched</p>
                                            )
                                        }{
                                            (nlp.hitKeywords.length > 0 || nlp.keywords.length > 0) && (
                                                <p className="mb-[4px] mt-[10px] font-mono text-[10px] text-[#111111]">TOKENS</p>
                                            )
                                        }{
                                            nlp.hitKeywords.length > 0 && (
                                                nlp.hitKeywords.map((k, i) => (
                                                    <span key={`nlphk${i}`} className="inline-block py-[2px] px-[7px] border-[#111111] border-[2px] m-[2px] text-[11px] text-[#111111] bg-[#F7F6F3]">{k}</span>
                                                ))
                                            )
                                        }{
                                            nlp.keywords.length > 0 && (
                                                nlp.keywords.map((k, i) => (
                                                    <span key={`nlpk${i}`} className="inline-block py-[2px] px-[7px] border-[#111111] border-[2px] m-[2px] text-[11px] text-[#6B6B66] bg-[#F7F6F3]">{k}</span>
                                                ))
                                            )
                                        }
                                    </>
                                )
                            }
                        </span>
                        <span>
                            <span className="flex flex-row gap-[4px] mb-[12px] [&>button]:flex-1 [&>button]:text-[12px] [&>button]:p-[6px] [&>button]:cursor-pointer [&>button]:text-center [&>button]:font-mono [&>button]:border-[#111111] [&>button]:border-t-[2px] [&>button]:border-r-[4px] [&>button]:border-b-[4px] [&>button]:border-l-[2px]">
                                <button className={`${viewStats ? "text-[#6B6B66] bg-[#F7F6F3]" : "text-[#FFFFFF] bg-[#111111]"}`} onClick={() => {setViewStats(false)}}>Teach</button>
                                <button className={`${viewStats ? "text-[#FFFFFF] bg-[#111111]" : "text-[#6B6B66] bg-[#F7F6F3]"}`} onClick={() => {setViewStats(true); getStats();}}>Stats</button>
                            </span>
                            {
                                viewStats ? (
                                    <span className="flex flex-col text-[13px]">
                                        {
                                            stats && stats.conversations.length > 0 ? (
                                                stats.conversations.map((stat, i) => (
                                                    <span key={`stat${i}`} className="flex flex-row justify-between mb-[7px]">
                                                        <p className="text-[#6B6B66]">{stat.label}</p>
                                                        <p className="font-mono font-bold">{stat.value}</p>
                                                    </span>
                                                ))
                                            ) : (
                                                <>
                                                    <span className="block h-[14px] w-[100%] animate-[pulse_1s_linear_infinite_alternate] bg-[#F7F6F3] mb-[7px]"></span>
                                                    <span className="block h-[14px] w-[100%] animate-[pulse_1s_linear_infinite_0.2s_alternate] bg-[#F7F6F3] mb-[7px]"></span>
                                                    <span className="block h-[14px] w-[100%] animate-[pulse_1s_linear_infinite_0.4s_alternate] bg-[#F7F6F3] mb-[7px]"></span>
                                                    <span className="block h-[14px] w-[100%] animate-[pulse_1s_linear_infinite_0.6s_alternate] bg-[#F7F6F3] mb-[7px]"></span>
                                                    <span className="block h-[14px] w-[100%] animate-[pulse_1s_linear_infinite_0.8s_alternate] bg-[#F7F6F3] mb-[7px]"></span>
                                                </>
                                            )
                                        }{
                                            stats && stats.topIntents.length > 0 && (
                                                <>
                                                <p className="font-mono text-[10px] mt-[3px] mb-[2px] text-[#6B6B66]">TOP INTENTS</p>
                                                {
                                                    stats.topIntents.map((intent, i) => (
                                                        <span key={`intent${i}`} className="flex flex-row justify-between mb-[7px]">
                                                            <p className="text-[#6B6B66]">{intent.intent}</p>
                                                            <p className="font-mono font-bold">{intent.count}</p>
                                                        </span>
                                                    ))
                                                }
                                                </>
                                            )
                                        }
                                    </span>
                                ) : (
                                    <span className="flex flex-col gap-[8px]">
                                        <input type="text" placeholder="If someone says..." className="flex-1 text-[13px] py-[8px] px-[10px] outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></input>
                                        <textarea placeholder="Vision should reply..." className="text-[13px] py-[8px] px-[10px] resize-none outline-none bg-[#F7F6F3] border-[#111111] border-t-[2px] border-r-[4px] border-b-[4px] border-l-[2px]"></textarea>
                                        <button className="p-[8px] bg-[#111111] text-[13px] font-bold cursor-pointer text-white">Teach Vision</button>
                                    </span>
                                )
                            }
                        </span>
                    </section>
                </div>
            </div>
        </main>
    )
}