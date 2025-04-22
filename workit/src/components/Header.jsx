import styles from "./Header.module.css";
import logo from "../assets/imgs/workit.svg";


export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div>
					<img src={logo} alt="" />
				</div>

				<div>
					<span>Apply for access</span>
				</div>
			</div>

			
		</header>
	);
}
