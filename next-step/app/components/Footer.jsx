// bottom bar of the website

import s from "./footer.module.css";

// minimal inline SVG paths for social icons, placeholder links obvi
const socials = [
  { href:"#", label:"X",         path:"M5 19l6-7-6-7h4l4 5 4-5h4l-6 7 6 7h-4l-4-5-4 5z" },
  { href:"#", label:"Instagram", path:"M12 7a5 5 0 100 10 5 5 0 000-10zm6-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3zm-1.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" },
  { href:"#", label:"YouTube",   path:"M3 8c0-2 2-3 3-3h12c1 0 3 1 3 3v8c0 2-2 3-3 3H6c-1 0-3-1-3-3V8zm7 2l6 3-6 3V10z" },
  { href:"#", label:"LinkedIn",  path:"M4 9h4v11H4zM6 4a2 2 0 110 4 2 2 0 010-4zm6 5h4v2c.6-1 1.9-2.3 4-2.3V20h-4v-6c-2 0-4 .9-4 3.2V20h-4V9z" },
];

export default function Footer(){
    return (
        <footer className={s.foot}>
            <div className="container">
                <div className={s.row}>
                    <div className={s.brand}>NEXTSTEP</div>
                    <div className={s.icons}>
                        {socials.map(sv=>(
                            <a key={sv.label} aria-label={sv.label} href={sv.href}>
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                    <path d={sv.path} fill="currentColor" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}