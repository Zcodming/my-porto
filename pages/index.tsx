import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Welcome from "./welcome";
import About from "./about";
import Skill from "./skill";
import Project from "./project";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

export default function Home() {
	const fieldRef = useRef<HTMLInputElement>(null);
	const fieldRef1 = useRef<HTMLInputElement>(null);
	const fieldRef2 = useRef<HTMLInputElement>(null);
	const fieldRef3 = useRef<HTMLInputElement>(null);
	const [isHome, setIsHome] = useState(true);
	const [isAbout, setIsAbout] = useState(false);
	const [isSkills, setIsSkills] = useState(false);
	const [isWorks, setIsWorks] = useState(false);

	const toHome = () => {
		fieldRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const toAbout = () => {
		fieldRef1.current?.scrollIntoView({ behavior: "smooth" });
	};
	const toSkills = () => {
		fieldRef2.current?.scrollIntoView({ behavior: "smooth" });
	};
	const toWorks = () => {
		fieldRef3.current?.scrollIntoView({ behavior: "smooth" });
	};

	const changeBackground = () => {
		if (window.scrollY >= 650 && window.scrollY < 1300) {
			setIsHome(false);
			setIsAbout(true);
			setIsSkills(false);
			setIsWorks(false);
		} else if (window.scrollY >= 1300 && window.scrollY < 2000) {
			setIsHome(false);
			setIsAbout(false);
			setIsSkills(true);
			setIsWorks(false);
		} else if (window.scrollY >= 2000) {
			setIsHome(false);
			setIsAbout(false);
			setIsSkills(false);
			setIsWorks(true);
		} else {
			setIsHome(true);
			setIsAbout(false);
		}
	};

	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});

	return (
		<div className="font-poppins">
			<Head>
				<title>Portofolio</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="absolute grid w-full h-10 top-0 place-content-center justify-center">
				<div className="flex flex-col ">
					<nav
						className="fixed flex justify-start py-4 px-12 w-full
                    top-0 left-0 right-0 z-10 text-sm bg-tuna">
						<div className="m-2 pr-12 mr-10">
							<span
								className={
									isHome
										? "text-md text-white"
										: "text-md text-light-blue"
								}>
								Zahwa&nbsp;
							</span>
							<span className="text-md text-white">
								Tri Riyanto
							</span>
						</div>
						<div className="m-2 md:pr-12 md:mr-10">
							<p className="text-md text-white">
								Currently Informatics Engineering
							</p>
							<p className="text-md text-white">
								Student at Tanjungpura University
							</p>
						</div>
						<div className="m-2 pr-12 mr-10">
							<p className="text-md text-white">
								Live in Pontianak
							</p>
							<p className="text-md text-white">Indonesia</p>
						</div>
					</nav>
					<nav
						className="flex justify-end py-4 pr-12 w-full
                    fixed top-0 left-0 right-0 z-10 text-sm">
						<div className="m-2">
							<button onClick={toHome}>
								<span
									className={
										isHome
											? "text-light-blue"
											: "text-orange"
									}>
									{isHome ? "Welcome" : "Top"}
								</span>
							</button>
						</div>
						<div className="m-2">
							<button onClick={toAbout}>
								<span
									className={
										isAbout
											? "text-light-blue"
											: "text-white"
									}>
									About Me
								</span>
							</button>
						</div>
						<div className="m-2	">
							<button onClick={toSkills}>
								<span
									className={
										isSkills
											? "text-light-blue"
											: "text-white"
									}>
									My Skills
								</span>
							</button>
						</div>
						<div className="m-2	">
							<button onClick={toWorks}>
								<span
									className={
										isWorks
											? "text-light-blue"
											: "text-white"
									}>
									My Works
								</span>
							</button>
						</div>
					</nav>
				</div>
			</header>

			<main>
				<div ref={fieldRef}>
					<Welcome />
				</div>
				<div ref={fieldRef1}>
					<About />
				</div>
				<div ref={fieldRef2}>
					<Skill />
				</div>
				<div ref={fieldRef3}>
					<Project />
				</div>
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
