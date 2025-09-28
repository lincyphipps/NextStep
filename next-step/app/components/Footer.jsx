// bottom bar of the website
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import s from "./footer.module.css";

const SOCIALS = [
  { label: "X (Twitter)", url: "https://x.com/yourhandle",       Icon: FaXTwitter },
  { label: "Instagram",   url: "https://instagram.com/yourname",  Icon: FaInstagram },
  { label: "YouTube",     url: "https://youtube.com/@yourname",   Icon: FaYoutube },
  { label: "LinkedIn",    url: "https://linkedin.com/in/yourid",  Icon: FaLinkedinIn },
];

export default function Footer(){
  return (
    <footer className={s.foot}>
      <div className="container">
        <div className={s.row}>
          <div className={s.brand}>NEXTSTEP</div>
          <nav className={s.icons}>
            {SOCIALS.map(({ label, url, Icon }) => (
              <a key={label} href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon size={22} aria-hidden />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
