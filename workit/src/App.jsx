import styles from "./App.module.css";
import "./global.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";

function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main>
				<Hero />
			</main>
		</div>
	);
}

export default App;
