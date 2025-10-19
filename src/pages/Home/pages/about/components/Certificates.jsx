export default function Certificates(props){
    const calendarIcon = (
        <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill="#FFFFFF" fill-opacity="0.0" stroke="#000000" strokeWidth="1.5" stroke-opacity="1.0" stroke-miterlimit="10" d="M1.5,13.83C1.54,14.42,2.08,15.0,2.62,15.0C2.62,15.0,13.42,15.0,13.42,15.0C13.96,15.0,14.5,14.42,14.5,13.83C14.5,13.83,14.5,3.92,14.5,3.92C14.5,3.33,13.96,2.75,13.42,2.75C13.42,2.75,2.62,2.75,2.62,2.75C2.08,2.75,1.54,3.33,1.54,3.92C1.54,3.92,1.5,13.83,1.5,13.83M1.54,5.67C1.54,5.67,14.5,5.67,14.5,5.67C14.5,5.67,1.54,5.67,1.54,5.67M5.32,1.0C5.32,1.0,5.32,4.5,5.32,4.5C5.32,4.5,5.32,1.0,5.32,1.0M10.72,1.0C10.72,1.0,10.72,4.5,10.72,4.5C10.72,4.5,10.72,1.0,10.72,1.0Z" stroke-linecap="round"/></svg>
    );

    return (
        <div className="mt-[0.75rem] [&>ul>li>div]:m-[0.5rem]">
            <ul className={`flex gap-[1rem] [&_.title]:font-semibold [&_.title]:text-[1rem] [&>li>div>span]:opacity-60 [&>li>div>span]:flex [&>li>div>span]:flex-row [&>li>div>span]:items-center [&>li>div>span]:gap-[0.5rem] [&>li>img]:w-full [&>li>img]:aspect-[1.4/1] [&>li>img]:border [&>li>img]:border-borderColor [&>li>img]:rounded-xl ${props.bp > 768 ? "flex-wrap [&>li]:w-[calc(50%-0.5rem)]" : "flex-col"}`}>
                <li>
                    <img src="%PUBLIC_URL%/../assets/home/certificates/Certificate_Proficient_in_Java.webp" alt="Certificate"></img>
                    <div>
                    <h1 className="title">Proficient in Java</h1>
                        <p>BISU</p>
                        <span>
                            {calendarIcon}
                            <p>Issued Jun 2024</p>
                        </span>
                    </div>
                </li>
                <li>
                    <img src="%PUBLIC_URL%/../assets/home/certificates/Certificate_Proficient_in_MYSQL_Database.webp" alt="Certificate"></img>
                    <div>
                    <h1 className="title">Proficient in MYSQL Database</h1>
                    <p>BISU</p>
                        <span>
                            {calendarIcon}
                            <p>Issued Jun 2025</p>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}