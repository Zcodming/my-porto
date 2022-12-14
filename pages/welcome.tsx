export default function Welcome() {
	return (
		<div className="font-mono flex flex-col pt-24 mb-20 pl-12 place-content-center justify-center h-screen min-w-full">
			<div className="text-left mb-4 mt-6 text-8xl">
				<p className="">PROGRAMMER</p>
			</div>
			<div
				className="flex flex-col bg-blue rounded-md place-content-center justify-center"
				style={{ width: "530px" }}>
				<img
					src="/Foto.png"
					alt="My Projects"
					className=" self-center"
					style={{ width: "auto", height: "200px" }}
				/>
			</div>
			<div className="text-right mb-4 pr-12 text-8xl">
				<p className="text-light-blue">ZAHWA</p>
				<p className="">TRI RIYANTO</p>
			</div>
		</div>
	);
}
