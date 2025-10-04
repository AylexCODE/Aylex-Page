export default function Certificates(props){
    return (
        <div className="mt-[0.75rem] [&>ul>li>div]:m-[0.5rem]">
            <ul className={`flex gap-[1rem] [&>li>.title]:font-medium [&>li>div>span]:opacity-60 [&>li>img]:w-full [&>li>img]:aspect-[1.4/1] [&>li>img]:border [&>li>img]:border-borderColor [&>li>img]:rounded-xl ${props.bp > 768 ? "flex-wrap [&>li]:w-[calc(50%-0.5rem)]" : "flex-col"}`}>
                <li>
                    <img src="%PUBLIC_URL%/../Certificate_Proficient_in_Java.webp" alt="Certificate"></img>
                    <div>
                    <p className="title">Proficient in Java</p>
                        <p>BISU</p>
                        <span>
                            <p>Issued Jun 2024</p>
                        </span>
                    </div>
                </li>
                <li>
                    <img src="%PUBLIC_URL%/../Certificate_Proficient_in_MYSQL_Database.webp" alt="Certificate"></img>
                    <div>
                    <p className="title">Proficient in MYSQL Database</p>
                    <p>BISU</p>
                        <span>
                            <p>Issued Jun 2025</p>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}