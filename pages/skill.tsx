import { useRef, useState } from "react";
import DevSkill from "./devSkill";
import OtrSkill from "./otrSkill";

export default function Skill() {
	const [change, setChange] = useState(false);
	const refChange = useRef(null);

	return (
		<div
			className="flex flex-col place-content-center justify-center w-full px-10 mb-16 pt-24 mt-6"
			ref={refChange}>
			<div className="flex flex-wrap">
				<div className="w-1/2 mr-12" style={{ width: "455px" }}>
					<div className="flex flex-coltext-2xl mb-4">
						<h1 className="text-light-blue text-8xl">My Skills</h1>
					</div>
					<div className="flex flex-col place-content-center justify-center rounded-xl">
						<div className="flex mb-4 mt-8 justify-start">
							<span className="text-left text-2xl text-light-blue">
								Intrest
							</span>
						</div>
						<div className="flex mb-48 justify-start">
							<button
								disabled
								className="hover:text-light-blue hover:border-light-blue text-left text-md py-1 px-2 mr-3 border border-3 border-white rounded-md">
								Programming
							</button>
							<button
								disabled
								className="hover:text-light-blue hover:border-light-blue text-left text-md py-1 px-2 mr-3 border border-3 border-white rounded-md">
								Gaming
							</button>
							<button
								disabled
								className="hover:text-light-blue hover:border-light-blue text-left text-md py-1 px-2 mr-3 border border-3 border-white rounded-md">
								Reading
							</button>
							<button
								disabled
								className="hover:text-light-blue hover:border-light-blue text-left text-md py-1 px-2 mr-3 border border-3 border-white rounded-md">
								Sketching
							</button>
						</div>
						<div className="mt-4 flex justify-end">
							<span className="text-lg">
								You Can Also Check My
							</span>
						</div>
						<div className="mb-8 flex justify-end text-4xl">
							{change ? (
								<button
									className="hover:text-light-blue"
									onClick={() =>
										setChange((change) => false)
									}>
									<span className="text-right mr-2">
										Programming Skills
									</span>
								</button>
							) : (
								<button
									className="hover:text-light-blue"
									onClick={() => setChange((change) => true)}>
									<span className="text-right mr-2">
										Related Skills
									</span>
								</button>
							)}
							<span className="text-light-blue">
								<i className="fa-solid fa-arrow-left"></i>
							</span>
						</div>
						<div></div>
					</div>
				</div>

				{change ? <OtrSkill /> : <DevSkill />}
			</div>
		</div>
	);
}
