import Image from "next/image";
import ProfilePic from "../public/Foto.png";

export default function Welcome() {
	return (
		<div className="font-mono flex flex-col pt-24 mb-20 pl-12 place-content-center justify-center h-screen min-w-full">
			<div className="text-left mb-4 mt-6 text-8xl">
				<p className="">PROGRAMMER</p>
			</div>
			<div
				className="flex flex-col bg-blue rounded-md place-content-center justify-center"
				style={{ width: "530px" }}>
				<Image
					src={ProfilePic}
					alt="My Projects"
					className=" self-center"
					width={200}
					height={100}
				/>
			</div>
			<div className="text-right mb-4 pr-12 text-8xl">
				<p className="text-light-blue">ZAHWA</p>
				<p className="">TRI RIYANTO</p>
			</div>
		</div>
	);
}
