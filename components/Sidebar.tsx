export default function Sidebar() {
	return (
		<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-tuna flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
			<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
				{/* Toggler */}
				<div className="-mr-2 flex items-center md:hidden">
					<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"></button>
				</div>
				{/* Brand */}
				<div className="shrink-0 flex items-center">
					<a href="#">Hello</a>
				</div>

				<div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ">
					{/* Collapse header */}
					<div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
						<div className="flex flex-wrap">
							<div className="w-6/12">
								<a
									className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
									href="/">
									Welcome
								</a>
							</div>
						</div>
					</div>
					{/* Divider */}
					<hr className="my-4 md:min-w-full" />
					{/* Heading */}
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
						KELOLA DATA
					</h6>
					{/* Navigation */}
					<ul className="md:flex-col md:min-w-full flex flex-col list-none">
						<li className="items-center">a</li>

						<li className="items-center">b</li>

						<li className="items-center">c</li>

						<li className="items-center">d</li>
					</ul>

					{/* Divider */}
					<hr className="my-4 md:min-w-full" />
					{/* Heading */}
				</div>
			</div>
		</nav>
	);
}
