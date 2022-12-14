import { useRef, useEffect } from "react";

export default function Navbar() {
	const fieldRef = useRef<HTMLInputElement>(null);
	const fieldRef1 = useRef<HTMLInputElement>(null);
	const fieldRef2 = useRef<HTMLInputElement>(null);
	const fieldRef3 = useRef<HTMLInputElement>(null);

	const toHome = () => {
		fieldRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const toAbout = () => {
		fieldRef1.current?.scrollIntoView({ behavior: "smooth" });
	};
	const toSkills = () => {
		fieldRef2.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<header className="absolute grid w-full h-10 top-0 place-content-center justify-center">
			<div className="flex flex-col ">
				<nav
					className="fixed flex justify-start py-4 px-12 w-full
                    top-0 left-0 right-0 z-10 text-sm bg-tuna">
					<div className="m-2 pr-12 mr-10">
						<span className="text-md text-white">
							Zahwa Tri Riyanto
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
						<p className="text-md text-white">Live in Pontianak</p>
						<p className="text-md text-white">Indonesia</p>
					</div>
				</nav>
				<nav
					className="flex justify-end py-4 pr-12 w-full
                    fixed top-0 left-0 right-0 z-10 text-sm">
					<div className="m-2">
						<button onClick={toAbout}>
							<span className="text-light-blue">About Me</span>
						</button>
					</div>
					<div className="m-2	">
						<button onClick={toSkills}>
							<span className="text-light-blue">My Skills</span>
						</button>
					</div>
					<div className="m-2	">
						<button>
							<span className="text-light-blue">My Works</span>
						</button>
					</div>
					<div className="m-2	">
						<button onClick={toHome}>Home</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
