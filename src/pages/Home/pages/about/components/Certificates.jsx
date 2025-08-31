export default function Certificates(){
    return (
        <div className="mt-[0.75rem]">
            <ul className="flex flex-col gap-[1rem] [&>li>.title]:font-medium [&>li>span]:opacity-60 [&>li>img]:w-full [&>li>img]:aspect-[1.4/1]">
                <li>
                    <img src="%PUBLIC_URL%/../Certificate_Proficient_in_Java.webp" alt="Certificate"></img>
                    <p className="title">Proficient in Java</p>
                    <p>BISU</p>
                    <span>
                        <p>Issued Jun 2024</p>
                    </span>
                </li>
                <li>
                    <img src="%PUBLIC_URL%/../Certificate_Proficient_in_MYSQL_Database.webp" alt="Certificate"></img>
                    <p className="title">Proficient in MYSQL Database</p>
                    <p>BISU</p>
                    <span>
                        <p>Issued Jun 2025</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}