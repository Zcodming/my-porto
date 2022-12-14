import Image from "next/image";
export default function Project() {
	return (
		<div className="flex flex-col place-content-center justify-center w-full px-10 mb-24 pt-24 mt-6">
			<div className="flex flex-col text-lg mb-16">
				<h1 className="text-light-blue text-8xl text-center">
					My Works
				</h1>
			</div>
			<div className="flex justify-center ">
				<div
					className="hover:-mt-4 flex flex-col min-w-0 break-words bg-white mb-6 shadow rounded-lg ease-linear transition-all duration-150"
					style={{
						width: "500px",
						height: "300px",
					}}>
					<Image
						alt="..."
						src="/project1.png"
						width={500}
						height={300}
						className="w-full align-middle rounded-t-lg"
					/>
					<blockquote className="p-4 justify-center">
						<h1 className="text-tuna text-lg text-center">
							Rooms Booking Website
						</h1>
					</blockquote>
				</div>
			</div>
		</div>
	);
}
