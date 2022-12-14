export default function OtrSkill() {
	return (
		<div
			className={`w-1/2 flex flex-col place-content-top justify-top bg-ship-gray rounded-xl shadow-inner-md overflow-y-auto`}
			style={{ width: "720px", height: "500px" }}>
			<table className="text-xl w-full ">
				<tbody>
					<tr>
						{/* React 	*/}
						<td className="px-10 my-7 text-left text-orange">
							UI/UX DESIGN
						</td>
						<td
							className="relative text-center text-green"
							style={{ width: "300px", height: "71px" }}>
							<div className="w-full bg-light-green rounded-full h-2.5 dark:bg-gray-700 my-7">
								<div
									className="bg-green h-2.5 rounded-full"
									style={{ width: "40%" }}></div>
							</div>
							<div className="absolute top-0 bottom-0 rounded-full border-4 flex p-1 my-7 bg-green border-white"></div>
							<div className="absolute top-0 bottom-0 rounded-full border-4 flex p-1 my-7 ml-16 bg-green border-white"></div>
							<div className="absolute top-0 bottom-0 rounded-full border-4 flex p-1 my-7 ml-32 bg-green border-white"></div>
							<div className="absolute top-0 bottom-0 rounded-full border-4 flex p-1 my-7 ml-48 border-white"></div>
							<div className="absolute top-0 bottom-0 rounded-full border-4 flex p-1 my-7 ml-64 border-white"></div>
							{/* <div className="absolute top-0 bottom-0 rounded-full border-4 flex p-2 my-6 ml-40 bg-white border-white shadow-lg"></div> */}
						</td>
						<td
							className="px-10 my-7 text-right"
							style={{ width: "204px" }}>
							<i>ADVANCE</i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
