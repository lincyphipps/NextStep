import s from "./getstarted.module.css"; // section specific styles

// using a small data array for the content on each card, easy to edit/reorder
const tiles = [
    {
        id:"interview",
        title:"Interview Prep",
        text:"Build confident interviews with STAR drills, targeted questions banks, and clear feedback that turn daily practice into concise, high-impact answers.",

    },
    {
        id:"resume",
        title:"Resume Review",
        text:"Turn your resume into a recruiter-ready snapshot with quantified impact, ATS-clean formatting, and role-tailored keywords-so your story reliably lands interviews.",
    },
    {
        id:"neet",
        title:"NeetCode",
        text:"Practice one focused NeetCode problem a day with skip, hints, see-answer, notes, and streaks-so progress stays consistent and measurable.",
    },
];

export default function GetStarted(){
    return(
        <section className={s.section}>
            <div className="container">
                <h2 className={s.title}>Get Started</h2>

                <div className={s.grid}>
                    {tiles.map(t=>(
                        <article key={t.id} className="card">
                            <h3 className={s.cardTitle}>{t.title}</h3>
                            <p className="p">{t.text}</p>
                            <a className="btn" href={`#${t.id}`}>GO</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}