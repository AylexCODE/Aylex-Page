import moment from "moment/moment";
import { useEffect, useState, useRef } from "react";
import Typewriter from "../../../components/Typewriter";

export default function AboutMe(){
    const [date, setDate] = useState(new Date().getFullYear());
    const [isMore, setIsMore] = useState(false);
    const [spanHeight, setSpanHeight] = useState();
    const text = useRef();
    
    useEffect(() => {
        setSpanHeight(text.current.scrollHeight +"px");
        setDate(moment(new Date()).format("MMMM DD, YYYY"));
    }, []);
    
    function handleSeeMore(){
        setIsMore(!isMore);
        isMore ? text.current.style.height = spanHeight : text.current.style.height = "auto";
    }
    
    return (
        <div className="mt-[0.75rem]">
            <span ref={text} className="block anim-size transition-all duration-250 overflow-hidden">
                <p>Hey there! I'm Alexander I. Jala, I specialize in building powerful backend systems. Passionate about efficient algorithms, and clean architecture{isMore ? `. Now (${date}), I can say` : "..."} <span className={isMore ? "inline" : "hidden"}>I'm competent but never better at <Typewriter text={["JavaScript", "PHP", "MySQL", "TailwindCSS"]}/></span></p>
                <p className={`mt-[0.5rem] ${isMore ? "block" : "hidden"}`}>I'm excited to make the leap and continue refining my skills in the world of programming.</p>
            </span>
            <button className="underline opacity-70" onClick={() => handleSeeMore()}>{isMore ? "See Less" : "See More"}</button>
        </div>
    )
}
