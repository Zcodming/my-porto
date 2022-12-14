export default function Navbar() {
	return (
		<header className="fixed grid w-full h-10 top-0 place-content-center justify-center">
			<div className="flex flex-col ">
				<nav
					className="flex justify-start py-4 px-12 w-full
                    fixed top-0 left-0 right-0 z-10 text-sm bg-tuna">
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
						<a href="#">
							<span className="text-light-blue">About Me</span>
						</a>
					</div>
					<div className="m-2	">
						<a href="#">
							<span className="text-light-blue">My Skills</span>
						</a>
					</div>
					<div className="m-2	">
						<a href="#">
							<span className="text-light-blue">My Works</span>
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
