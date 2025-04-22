import { Button } from "./Button";
import styles from "./Hero.module.css";
import iphone from "../assets/imgs/iphone11.svg";

export function Hero() {
	return (
		<div className={styles.heroTitle}>
			<h1>
				Data <span>tailored</span> to <br /> your needs.
			</h1>
			<Button />
			<img src={iphone} alt="" />
		</div>
	);
}
