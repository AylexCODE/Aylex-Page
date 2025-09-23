import GithubGraphQL from '../utilities/githubGraphQL.js';
import { useState, useEffect } from 'react';

export default function GithubContributions(){
    const [data, setData] = useState();
    const [contributions, setContributions] = useState();
    const [activeYear, setActiveYear] = useState(0);
    
    useEffect(() => {
        (async function(){
            const data = await new GithubGraphQL().getContributions();
            data.years.reverse();
            setData(data);
            
            calculateContributions(data, "Last Year");
        })();
        // eslint-disable-next-line
    }, []);
    
    function calculateLastYear(data){
        let finalData = [];
        const years2 = data.years.slice(1, 3).reverse();
        
        for(let i = 0; i < years2.length; i++){
            for(const day of data.data['y'+years2[i]]){
                finalData.push(day);
            }
        }
        
        const dataLength = finalData.length;
        const excessDays = dataLength - 365;
        
        return finalData.slice(excessDays, dataLength);
    }
    
    function getMonth(n){
        switch(n){
            case "01": return "Jan";
            case "02": return "Feb";
            case "03": return "Mar";
            case "04": return "Apr";
            case "05": return "May";
            case "06": return "Jun";
            case "07": return "Jul";
            case "08": return "Aug";
            case "09": return "Sep";
            case "10": return "Oct";
            case "11": return "Nov";
            case "12": return "Dec";
            default: return "N/A";
        }
    }
    
    function calculateContributions(data, index){
        if(index === "Last Year"){
            data = calculateLastYear(data);
        }else{
            data = data.data['y'+index];
        }
        
        let currentMonth = null, currentWeek = 0, monthForLatest = 0, firstMonth;
        const months = [];

        for(const day of data){
            const monthInData = parseInt(day.date.split("-")[1]);
            if(!firstMonth) firstMonth = day.date;
                
            if((currentMonth === monthInData || day.weekday !== 0) && currentMonth){
                if(day.weekday === 0){
                    months[monthForLatest][++currentWeek] = [day];
                }else{
                    months[monthForLatest][currentWeek].push(day);
                }
            }else{
                currentMonth = monthInData; monthForLatest++;
                currentWeek = 0;
                months[monthForLatest] = [];
                months[monthForLatest][currentWeek] = [day];
            }
        }

        setContributions(months);
    }
    
    return (
        <div className="h-fit w-full p-[16px] overflow-scroll text-[14px] border border-borderColor rounded-2xl">
        {data ? (
        <div className="w-fit">
            <div className="w-[935px] flex flex-row gap-[16px]">
                <div className={`w-[844px] overflow-hidden flex flex-row gap-[4px] [&>span]:flex [&>span]:flex-col [&>span]:gap-[4px] [&>span>p]:text-center [&>span>span]:flex [&>span>span]:flex-row [&>span>span]:gap-[4px] [&>span>span]:justify-end [&>span>span]:last:justify-start [&>span]:first:[&>span]:items-end [&>span>span>ul]:flex [&>span>span>ul]:flex-col [&>span>span>ul]:gap-[4px] [&>span>span>ul>li]:size-[12px] [&>span>span>ul>li]:inset-shadow-[0px_0px_0px_1px_var(--color-navShadowColor)] [&>span>span>ul>li]:rounded-xs`}>
                    {contributions.map((months) => (
                        <span key={'c'+months[0][0].date}>
                            <p>{getMonth(months[0][0].date.split("-")[1])}</p>
                            <span key={'t'+months[0][0].date}>
                            {months.map((week) => (
                                <ul key={'d'+week[0].date}>{
                                week.map(day => (
                                    <li key={day.date} title={`${day.contributionCount} contributions in ${day.date}`} datalevel={day.contributionLevel} style={{backgroundColor: day.color}}></li>
                                ))}</ul>
                            ))}
                            </span>
                        </span>
                    ))}
                </div>
                <div className="h-[160px] py-[8px]">
                    <ul className="h-full w-[75px] flex flex-col overflow-scroll gap-[8px] text-[12.8px] [&>li]:border [&>li]:border-borderColor [&>li]:p-[4px] [&>li]:rounded-lg [&>li]:text-center [&>li]:shadow-[0px_2px_0px_var(--color-navShadowColor)] [&>.active]:shadow-[0px_2px_0px_var(--color-activeBtnShadowColor)] [&>.active]:bg-activeBtnColor [&>.active]:border-activeBtnColor [&>.active]:text-componentsColor [&>.active]:font-medium">{data.years.map((year, index) => (
                        <li className={activeYear === index ? "active" : "inactive" } key={year}><button onClick={() => { calculateContributions(data, data.years[index]); setActiveYear(index); }}>{year}</button></li>
                    ))}</ul>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[16px] h-[0px]">
                <span className="w-[calc(100%-90px)] h-[16px] relative top-[-20px] flex flex-row justify-between items-center gap-[8px] [&>span>ul]:flex [&>span>ul]:flex-row [&>span>ul]:gap-[2px] [&>span>ul>li]:rounded-xs [&>span>ul>li]:size-[12px]">
                    <span>
                        <p>Total Contributions {data.totalContributions}</p>
                    </span>
                    <span className="flex flex-row justify-between items-center gap-[8px]">
                        <p>Less</p>
                        <ul>{data.colors.map((color) => (
                            <li key={color} style={{backgroundColor: color}}></li>
                        ))}</ul>
                        <p>More</p>
                    </span>
                </span>
            </div>
        </div>
        ) : (
        <div className="h-[160px] grid place-items-center">
            <span className="flex animate-ping rounded-max size-[1rem] bg-[#000]"></span>
        </div>
        )}
        </div>
    )
}
