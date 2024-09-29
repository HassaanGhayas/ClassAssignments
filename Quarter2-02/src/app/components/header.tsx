import Link from "next/link"


export default function Header() {
    return(
        <header className="flex items-center justify-around w-100% h-20  bg-zinc-900 text-gray-400 text-lg">
            <div><Link href={"/"}>Logo</Link></div>
            <div>
                <ul className="flex gap-20">
                    <li><Link href={"/portfolio"}>Portfolio</Link></li>
                    <li><Link href={"/about"}>About Us</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}