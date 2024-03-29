import Image from "next/image";
import ProjectPic from "../public/project1.png";
import ProjectPic2 from "../public/project2.png";
import ProjectPic3 from "../public/project3.png";

export default function Project() {
	return (
		<div className="flex flex-col place-content-center justify-center w-full px-10 mb-24 pt-24 mt-6">
			<div className="flex flex-col text-lg mb-16">
				<h1 className="text-light-blue text-8xl text-center">My Works</h1>
			</div>
			<div className="flex flex-wrap justify-center gap-8">
				<div
					className="hover:-mt-4 flex flex-col min-w-0 break-words bg-white mb-6 shadow rounded-lg ease-linear transition-all duration-150"
					style={{
						width: "500px",
						height: "300px",
					}}>
					<Image
						alt="Project 1"
						src={ProjectPic}
						width={500}
						height={300}
						className="w-full align-middle rounded-t-lg"
					/>
					<blockquote className="p-4 justify-center">
						<h1 className="text-tuna text-lg text-center">Rooms Booking Website</h1>
					</blockquote>
				</div>
				<div
					className="hover:-mt-4 flex flex-col min-w-0 break-words bg-white mb-6 shadow rounded-lg ease-linear transition-all duration-150"
					style={{
						width: "500px",
						height: "300px",
					}}>
					<Image
						alt="Project 1"
						src={ProjectPic2}
						width={500}
						height={200}
						className="w-full align-middle rounded-t-lg"
					/>
					<blockquote className="p-4 justify-center">
						<h1 className="text-tuna text-lg text-center">Flood Monitoring System</h1>
					</blockquote>
				</div>
				<div
					className="hover:-mt-4 flex flex-col min-w-0 break-words bg-white mb-6 shadow rounded-lg ease-linear transition-all duration-150"
					style={{
						width: "500px",
						height: "300px",
					}}>
					<Image
						alt="Project 1"
						src={ProjectPic3}
						width={500}
						height={300}
						className="w-full align-middle rounded-t-lg"
					/>
					<blockquote className="p-4 justify-center">
						<h1 className="text-tuna text-lg text-center">Property Management System</h1>
					</blockquote>
				</div>
			</div>
		</div>
	);
}
