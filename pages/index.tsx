import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Welcome from "./welcome";
import About from "./about";
import Skill from "./skill";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="font-poppins">
			<Head>
				<title>Portofolio</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link href="/styles/globals.css" rel="stylesheet"></link>
				<script src="https://kit.fontawesome.com/a4e48aa4d8.js"></script>
			</Head>

			<Navbar />

			<main className={styles.main}>
				<Welcome />
				<About />
				<Skill />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}