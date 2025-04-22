import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Information } from "./components/Information";
import { Cta } from "./components/Cta";

import circleLarge from "./assets/imgs/circles-large.svg";
import circleSmall from "./assets/imgs/circles-small.svg";
import workitBlack from "./assets/imgs/workit-black.svg";

import facebook from "./assets/imgs/facebook.svg";
import instagram from "./assets/imgs/instagram.svg";
import twitter from "./assets/imgs/twitter.svg";

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
				<div className={styles.informationContent}>
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
				</div>
			</section>
			<section className={styles.ctaContainer}>
				<Cta />
				<div className={styles.logoSocial}>
					<img src={workitBlack} alt="" />
					<ul>
						<li>
							<a href="">
								<img src={facebook} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={twitter} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={instagram} alt="" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default App;
