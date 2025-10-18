import { useEffect, useRef } from "react";

export default function Boxes(props){
    const boxCount = props.difficulty.boxCount;
    const guessBox = useRef(null);

    const boxElements = [];
    for(let i = 0; i < boxCount; i++){
        boxElements.push(
            <span key={`box${i}`}><p>{i+1}</p></span>
        );
    }

    useEffect(() => {
        props.setGuessBox(guessBox);
        // eslint-disable-next-line
    }, []);

    return (
        <section ref={guessBox} className="w-[calc(100%-3rem)] flex flex-row flex-wrap justify-center gap-[1rem] p-[1rem] z-1 [&>span>p]:opacity-50 [&>span>p]:grid [&>span>p]:place-items-center [&>span>p]:size-[50px] [&>span]:border [&>span]:border-t-[2px] [&>span]:border-r-[5px] [&>span]:border-b-[5px] [&>span]:border-l-[2px] [&>span>h2]:size-[50px] [&>span>h2]:grid [&>span>h2]:place-items-center [&>span>h2]:text-[1.5rem] [&>span>h2]:font-bold">
            {boxElements}
        </section>
    )
}