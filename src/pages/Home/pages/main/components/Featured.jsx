import { NavLink } from "react-router-dom";

export default function Featured(props){
    return (
        <div className="pt-[1rem] w-full">
            <ul className="w-full snap-x snap-mandatory h-[22rem] overflow-x-scroll flex flex-row gap-[0.5rem] [&>li]:snap-center [&>li]:block [&>li]:h-full [&>li]:w-[20rem] [&>li]:border [&>li]:border-borderColor [&>li]:rounded-xl [&>li>span]:block [&>li>span]:p-[0.5rem] [&>li>div]:h-[15rem] [&>li>div]:w-[20rem] [&>li>div]:rounded-t-xl [&>li>div]:overflow-hidden [&>li>div>img]:h-full [&>li>div>img]:w-full [&>li>span>p]:first:font-medium [&>li>span>a]:block [&>li>span>a]:border [&>li>span>a]:border-borderColor [&>li>span>a]:rounded-lg [&>li>span>a]:px-[1rem] [&>li>span>a]:py-[0.3rem] [&>li>span>a]:mt-[0.5rem] [&>li>span>a]:text-center [&>li>span>a]:hover:bg-[#123456] [&>li>span>a]:hover:text-white [&>li>span>a]:hover:font-bold [&>li>span>a]:transition-colors">
                <li>
                    <div><img src="%PUBLIC_URL%/../assets/home/projectsThumbnails/CloudClipboard-Handle.webp" alt="project handle"></img></div>
                    <span>
                        <p>Cloud Clipboard</p>
                        <p>A VS Code Extension</p>
                        <NavLink to="https://marketplace.visualstudio.com/items?itemName=AylexCODE.cloud-clipboard" target="_blank">Learn More</NavLink>
                    </span>
                </li>
            </ul>
        </div>
    )
}