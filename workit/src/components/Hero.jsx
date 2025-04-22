import { Button } from "./Button";
import styles from "./Hero.module.css";

export function Hero() {
	return (
		<div className={styles.heroTitle}>
			<h1>
				Data <span>tailored</span> to <br /> your needs.
			</h1>
			<Button textbtn="Learn More" />
		</div>
	);
}
