import styles from "./Information.module.css";

export function Information(props) {
	return (
		<div className={styles.information}>
			<span>{props.number}</span>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
}
