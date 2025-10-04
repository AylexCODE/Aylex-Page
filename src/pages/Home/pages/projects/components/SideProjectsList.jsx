import OctoKitRest from "../utilities/octoKit";
import { useEffect } from "react";

export default function SideProjectsList(){
    useEffect(() => {
        (async function(){
            const data = await new OctoKitRest().getSideProjectsFiles();
        })();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="pt-[1rem] w-full">
            <p className="opacity-60">Side Projects</p>
            <p>In Progress...</p>
        </div>
    )
}