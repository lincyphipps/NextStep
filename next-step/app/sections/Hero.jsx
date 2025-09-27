// hero image + heading/copy
import Image from "next/image";
import s from "./hero.module.css";

export default function Hero(){
    return(
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.art}>
                        <Image src="/assets/hero-page.png" alt="" width={600} height={600} priority/>
                    </div>

                    <div className={s.copy}>
                        <h1 className="h1">Make the Leap!</h1>
                        <p className="p">
                            Guided hops forward-resume, polish, target outreach, and interview drills-so when its
                            time to leap, you land the job.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}