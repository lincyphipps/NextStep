// react component for the header of website to be used anywhere
import Image from "next/image"; // next image: optimized images
import Link from "next/link"; // next link for navigation
import s from "./header.module.css"; // css module specific to header
import headerLogo from "../../public/assets/single logo.png"
import Link from "next/link";

export default function Header(){
    return (
        <header>
            <div className={s.top}>
                <div className="container">
                    <div className={s.row}>
                        <div className={s.centerLogo}>
                            <Image src={headerLogo} alt="NextStep" width={72} height={72} />
                        </div>

                        <Link href="/dashboard" className={s.profile} aria-label="Profile">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="CurrentColor">
                                <circle cx="12" cy="8" r="3.5"/>
                                <path d="M4.5 19.5c0-3.6 3.8-5.5 7.5-5.5s7.5 1.9 7.5 5.5" strokeLinecap="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <nav className={s.nav}>
                <div className="container">
                    <ul className={s.links}>
                        <li><Link href="/interview">Interview</Link></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#neet">NeetCode</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}