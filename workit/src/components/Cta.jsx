import headshot from "../assets/imgs/headshot.svg";
import styles from "./Cta.module.css";
import circleLarge from "../assets/imgs/circles-large.svg";

import { Button } from "./Button";

export function Cta() {
	return (
		<section className={styles.ctaSection}>
			<img className={styles.headshot} src={headshot} alt="" />

			<div className={styles.ctaContent}>
				<strong>Be the First to Test</strong>
				<p>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call
					with me to become a beta tester for our app and kickstart your
					company. Apply for access below and I’ll be in touch to schedule a
					call.
				</p>
				<Button textbtn="Apply for access" />
			</div>
			<img className={styles.circleLarge} src={circleLarge} alt="" />
		</section>
	);
}
