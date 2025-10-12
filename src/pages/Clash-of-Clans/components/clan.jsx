import ClanData from "../utilities/clanData";

import { useEffect, useState } from "react";

function Clan(){
    const [data, setData] = useState();
    useEffect(() => {
        (async function(){ 
            const clan = await new ClanData().getClanData();
            // console.log(clan);
            setData(clan);
        })();
        // esline-disable-next-line
    }, []);

    function handleRole(role){
        if(role === "coLeader"){
            return "Co-leader";
        }else if(role === "admin"){
            return "Elder";
        }else{
            return role.slice(0, 1).toUpperCase() + role.slice(1, role.length);
        }
    }

    function copyClanid(){
        navigator.clipboard.writeText(data.tag).then(() => {
            console.log("Successfully copied to clipboard!");
        }).catch((e) => {
            console.log(`Copy to clipboard failed!\n${e}`);
        });
    }

    return (
    <>
        {data ? (
        <>
        <section className="[&>div]:bg-[#7F7F65] flex flex-row mx-[0.5rem] [&>div]:grow">
            <span className="flex flex-col grow [&>span]:px-[0.5rem] [&>span]:w-[90px] [&>span]:h-[50%] [&>span]:shrink-0 [&>span]:rounded-l-md [&>span]:grid [&>span]:place-items-center">
                <span className="bg-[#7F7F65]">
                    <img src={data.badgeUrls.large} alt="Badge"/>
                </span>
                <span className="bg-[#59594D]">
                    .
                </span>
            </span>
            <div className="flex flex-col w-[55%] gap-[0.5rem] justify-between p-[0.5rem]">
                <div className="flex flex-row gap-[1rem] w-full">
                    <span className="flex flex-col w-full gap-[0.10rem]">
                        <span className="flex flex-row w-full justify-between">
                            <span>
                                <h1 className="text-[#FFFFCB]">{data.name}</h1>
                                <p className="semibold-coc-text">{data.tag}</p>
                            </span>
                            <span>
                                <button onClick={() => {copyClanid()}}>
                                    <svg height="22px" width="22px" viewBox="0 0 22 22"><path d="M 17.52 13.55 C 16.68 13.55 15.88 13.81 15.19 14.32 C 15.19 14.32 8.54 11 8.54 11 C 8.54 11 15.19 7.68 15.19 7.68 C 15.88 8.18 16.68 8.45 17.52 8.45 C 19.72 8.45 21.5 6.67 21.5 4.47 C 21.5 2.28 19.72 0.5 17.52 0.5 C 15.35 0.5 13.57 2.26 13.55 4.43 C 13.55 4.43 6.81 7.8 6.81 7.8 C 6.12 7.29 5.32 7.02 4.48 7.02 C 2.28 7.02 0.5 8.81 0.5 11 C 0.5 13.19 2.28 14.97 4.48 14.97 C 5.32 14.97 6.12 14.71 6.81 14.2 C 6.81 14.2 13.55 17.57 13.55 17.57 C 13.57 19.74 15.35 21.5 17.52 21.5 C 18.59 21.5 19.58 21.09 20.34 20.34 C 21.09 19.58 21.5 18.59 21.5 17.52 C 21.5 15.33 19.72 13.55 17.52 13.55 Z" stroke="#000000" strokeWidth="1" fill="#FFFFFF"/></svg>
                                </button>
                            </span>
                        </span>
                        <span className="semibold-coc-text">{data.description}</span>
                    </span>
                </div>
                <div className="flex flex-row gap-[1rem] w-full">
                    <span className="flex flex-col w-full gap-[0.10rem] justify-end">
                        <span className="flex flex-row w-full justify-between">
                            <ul className="flex flex-row items-center gap-[0.5rem] [&>li]:size-[2.5rem]">
                                {data.labels.map((icon) => (
                                    <li key={icon.name}>
                                        <img src={icon.iconUrls.small} alt={icon.name} />
                                    </li>
                                ))}
                            </ul>
                            <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                                <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Edit</h1>
                            </button>
                        </span>
                    </span>
                </div>
            </div>
            <div className="w-[45%] py-[0.5rem] pl-[0.5rem] flex flex-row gap-[0.5rem] rounded-r-md">
                <span className="relative top-[1.45rem] border h-[77%] self-center"></span>
                <div className="flex flex-col [&>span]:semibold-coc-text [&>span]:flex [&>span]:flex-row [&>span]:gap-[0.5rem] [&>span]:justify-between [&>span]:border-b [&>span]:py-[0.25rem]">
                    <h1 className="invisible">T</h1>
                    <span>
                        <p>Clan War League</p>
                        <p>{data.warLeague.name}</p>
                    </span>
                    <span>
                        <p>Total points:</p>
                        <p>{data.clanPoints}</p>
                        <p>{data.clanCapitalPoints}</p>
                    </span>
                    <span>
                        <p>Clan Location:</p>
                        <p>International</p>
                    </span>
                    <span>
                        <p>Chat Language</p>
                        <p>{data.chatLanguage.name}</p>
                    </span>
                    <span>
                        <p>Type:</p>
                        <p>Invite only</p>
                    </span>
                    <span>
                        <p>Required trophies:</p>
                        <p>{data.requiredTrophies}</p>
                        <p>{data.requiredBuilderBaseTrophies}</p>
                    </span>
                    <span>
                        <p>Required Town Hall level:</p>
                        <p>{data.requiredTownhallLevel}</p>
                    </span>
                </div>
            </div>
        </section>
        <section className="bg-[#A8A793] flex flex-row gap-[0.25rem] py-[0.5rem] px-[0.25rem] mx-[0.5rem] rounded-md mt-[0.25rem]">
            <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Clan Notice</h1>
            </button>
            <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">War Log</h1>
            </button>
            <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Send Mail</h1>
            </button>
            <button className="p-px rounded-md bg-linear-[0deg,#53873C_30%,#75BE31_60%,#F3FFD4_80%] border border-black">
                <h1 className="px-[2.5rem] py-[0.25rem] rounded-md bg-linear-[0deg,#75BE31_48%,#C2E96A_48%]">Leave</h1>
            </button>
        </section>
        <section className="flex flex-col mx-[0.5rem]">
            <span className="flex flex-row items-center justify-center gap-[0.5rem] [&>h1]:semibold-coc-text py-[0.5rem]">
                <p className="regular-coc-text">Members {data.members}/50</p>
                <p></p>
                <h1>Most Tropies</h1>
            </span>
            <div className="[&>ul>li]:p-px [&>ul>li]:odd:bg-linear-[0deg,#A3A49E_20%,#FCFEF0_50%] [&>ul>li]:even:bg-linear-[0deg,#989991_20%,#C1C3B6_50%] [&>ul>li>span]:w-full [&>ul>li>span]:py-[0.25rem] [&>ul>li]:odd:[&>span]:bg-linear-[0deg,#D5D8CD_50%,#E8EBE4_50%] [&>ul>li]:even:[&>span]:bg-linear-[0deg,#C1C3B8_50%,#CFD0C8_50%] [&>ul>li>span]:rounded-md">
                <ul className="[&>li>span>div]:has-[p]:flex [&>li>span>div]:has-[p]:flex-col [&>li>span>div]:has-[p]:items-center [&>li>span>div]:has-[p]:mx-[0.5rem] [&>li>span>span]:has-[h1]:grow [&>li>span>span]:has-[h2]:bg-[#A7AAA1] [&>li>span>span]:has-[h2]:w-[5rem] [&>li>span>span]:has-[h2]:text-center [&>li>span>span]:has-[h2]:px-[1rem] [&>li>span>span]:has-[h2]:py-[0.25rem] [&>li>span>span]:has-[h2]:rounded-md [&>li>span>p]:h-[90%] [&>li>span>p]:w-px [&>li>span>p]:bg-[#A3A49E] [&>li>span>div]:first:size-[2.5rem] [&>li>span>div]:first:grid [&>li>span>div]:first:place-items-center [&_p]:regular-coc-text [&>li]:flex [&>li]:flex-row [&>li>span>img]:size-[2.5rem] [&>li>span>span]:flex [&>li>span>span]:flex-col flex flex-col gap-[0.35rem] [&>li]:rounded-md [&>li>span]:p-[0.5rem] [&>li>span]:w-full [&>li>span]:flex [&>li>span]:flex-row [&>li>span]:items-center [&>li>span]:gap-[0.5rem]">
                {data.memberList.map((player) => (
                    <li key={player.clanRank}>
                        <span>
                            <div>
                                <h1>{player.clanRank}.</h1>
                            </div>
                            <p></p>
                            <img src={player.leagueTier.iconUrls.small} alt="League" />
                            <p></p>
                            <h1>{player.townHallLevel}</h1>
                            <p></p>
                            <span>
                                <h1>{player.name}</h1>
                                <p>{handleRole(player.role)}</p>
                            </span>
                            <p></p>
                            <div>
                                <p>Troops donated:</p>
                                <p>{player.donations}</p>
                            </div>
                            <div>
                                <p>Troops received:</p>
                                <p>{player.donationsReceived}</p>
                            </div>
                            <span>
                                <div>
                                    <h2>{player.trophies}</h2>
                                    <div></div>
                                </div>
                            </span>
                        </span>
                    </li>
                ))}
                </ul>
            </div>
        </section>
        </>
        ) : (
            <p>Getting Data</p>
        )}
    </>
    )
}

export default Clan;