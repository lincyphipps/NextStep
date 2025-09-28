// react component for the header of website to be used anywhere
"use client";
import Image from "next/image"; // next image: optimized images
import Link from "next/link"; // next link for navigation
import s from "./header.module.css"; // css module specific to header
import headerLogo from "../../public/assets/single logo.png"
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header(){
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <header>
            <div className={s.top}>
                <div className="container">
                    <div className={s.row}>
                        <Link href="/" className={s.centerLogo}>
                            <Image src={headerLogo} alt="NextStep" width={72} height={72} />
                        </Link>
                        <a
                            className={s.profile}
                            aria-label="Profile"
                            onClick={() => router.push(isLoggedIn ? "/dashboard" : "/signup")}
                            style={{ cursor: 'pointer' }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="CurrentColor">
                                    <circle cx="12" cy="8" r="3.5"/>
                                    <path d="M4.5 19.5c0-3.6 3.8-5.5 7.5-5.5s7.5 1.9 7.5 5.5" strokeLinecap="round"/>
                                </svg>
                        </a>    
                    </div>
                </div>
            </div>

            <nav className={s.nav}>
                <div className="container">
                    <ul className={s.links}>
                        <li>
                            <a 
                            onClick={() => router.push(isLoggedIn ? "/interview" : "/signup")} 
                            style={{ cursor: "pointer" }}
                            >
                                Interview
                            </a>
                        </li>
                        <li>    
                            <a 
                            onClick={() => router.push(isLoggedIn ? "/resume" : "/signup")} 
                            style={{ cursor: "pointer" }}
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                            onClick={() => router.push(isLoggedIn ? "/neet" : "/signup")}
                            style={{ cursor: "pointer" }}
                            >
                                NeetCode
                            </a>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}