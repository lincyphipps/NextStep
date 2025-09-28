import Link from "next/link";
import s from "./authCard.module.css";

export default function AuthCard({ title, toggleText, toggleHref, children }) {
  return (
    <div className={s.wrapper}>
      {/* Page Title */}
      <h1 className={s.title}>{title}</h1>

      {/* Card */}
      <div className={s.card}>
        {children}

        {/* Toggle Link */}
        <p className={s.toggle}>
          {toggleText}{" "}
          <Link href={toggleHref}>
            {toggleHref === "/login" ? "Login" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
}
