import styles from "./Button.module.css";

export function Button(props) {
	return <button className={styles.buttonPrimary}>{props.textbtn}</button>;
}
