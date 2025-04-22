import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Information } from "./components/Information";
import { Cta } from "./components/Cta";

import circleLarge from "./assets/imgs/circles-large.svg";
import circleSmall from "./assets/imgs/circles-small.svg";

import styles from "./App.module.css";
import "./global.css";

function App() {
	return (
		<div>
			<div className={styles.app}>
				<img className={styles.circleSmall} src={circleSmall} alt="" />
				<img className={styles.circleLarge} src={circleLarge} alt="" />
				<Header />
				<div className={styles.wrapper}>
					<section>
						<Hero />
					</section>
				</div>
			</div>

			<section className={styles.informationContainer}>
				<Information
					number="01"
					title="Actionable insights"
					text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
				/>

				<Information
					number="02"
					title="Data-driven decisions"
					text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
				/>

				<Information
					number="03"
					title="Always affordable"
					text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
				/>
			</section>
			<section className={styles.ctaContainer}>
				<Cta />
			</section>
		</div>
	);
}

export default App;
