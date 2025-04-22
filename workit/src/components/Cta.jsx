import headshot from "../assets/imgs/headshot.svg";
import styles from "./Cta.module.css";

export function Cta() {
	return (
		<section className={styles.ctaSection}>
			<img className={styles.headshot} src={headshot} alt="" />

            <div>
                
            </div>
		</section>
	);
}
