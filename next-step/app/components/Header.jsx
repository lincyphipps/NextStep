// react component for the header of website to be used anywhere
import Image from "next/image"; // next image: optimized images
import s from "./header.module.css"; // css module specific to header

export default function Header(){
    return (
        <header>
            <div className={s.top}>
                <div className="container">
                    <div className={s.row}>
                        <div className={s.centerLogo}>
                            <Image src="/assets/single-logo.png" alt="NextStep" width={72} height={72} />
                        </div>

                        <button className={s.profile} aria-label="Profile">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="CurrentColor">
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <nav className={s.nav}>
                <div className="container">
                    <ul className={s.links}>
                        <li><a href="#interview">Interview</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#neet">NeetCode</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}