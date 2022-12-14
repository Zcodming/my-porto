export default function Skill() {
	return (
		<div className="flex flex-col place-content-center justify-center w-full px-10 mb-12">
			<div className="flex flex-coltext-2xl mb-4">
				<h1 className="text-light-blue text-8xl">About Me</h1>
			</div>
			<div className="flex flex-wrap">
				<div
					className="w-1/2 mr-12 place-content-center justify-center bg-smokey rounded-xl"
					style={{ width: "500px" }}>
					<div className="flex my-6 justify-center">
						<img
							src="/Foto.png"
							alt="My Projects"
							className="p-1 rounded-full ring-2 ring-blue"
							style={{ height: "200px" }}
						/>
					</div>
					<div className="flex mb-8 justify-center">
						<span className="text-center text-2xl text-light-blue">
							Contact
						</span>
					</div>
					<div className="flex justify-start text-left ml-28">
						<div>
							<span className="mr-6">
								<i className="fa-brands fa-whatsapp"></i>
							</span>
							<span className="ml-5">+62-895-3467-93826</span>
						</div>
					</div>
					<div className="flex justify-start text-left ml-28">
						<div>
							<span className="mr-6">
								<i className="fa-regular fa-envelope"></i>
							</span>
							<span>zahwatri.riyanto@gmail.com</span>
						</div>
					</div>
					<div className="flex justify-start text-left ml-28 mb-10">
						<div>
							<span className="mr-6">
								<i className="fa-solid fa-location-dot"></i>
							</span>
							<span>Pontianak, Kalimantan Barat</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-1/2">
					<p className="text-2xl text-center">
						Hello, my name is Zahwa Tri Riyanto
					</p>
				</div>
			</div>
		</div>
	);
}
