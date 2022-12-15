import Image from "next/image";
import ProfilePic from "../public/Foto.png";

export default function About() {
	return (
		<div className="flex flex-col place-content-center justify-center w-full px-10 mb-6 pt-24 mt-6">
			<div className="flex flex-col text-2xl mb-4">
				<h1 className="text-light-blue text-8xl">About Me</h1>
			</div>
			<div className="flex flex-wrap">
				<div
					className="w-1/2 mr-12 place-content-center justify-center bg-ship-gray rounded-xl shadow-md"
					style={{ width: "455px" }}>
					<div className="flex my-6 justify-center">
						<Image
							src={ProfilePic}
							alt="My Projects"
							width={150}
							height={150}
							className="p-1 rounded-full ring-2 ring-blue"
						/>
					</div>
					<div className="flex mb-8 justify-center">
						<span className="text-center text-2xl text-light-blue">
							Contact
						</span>
					</div>
					<div className="flex justify-start text-left ml-24">
						<div>
							<span className="mr-4">
								<i className="fa-brands fa-whatsapp"></i>
							</span>
							<a
								type="button"
								href="https://wa.me/+62895346793826"
								target="_blank"
								rel="noreferrer"
								className="ml-5 hover:text-light-blue">
								+62 895-3467-93826
							</a>
						</div>
					</div>
					<div className="flex justify-start text-left ml-24">
						<div>
							<span className="mr-4">
								<i className="fa-regular fa-envelope"></i>
							</span>
							<a
								type="button"
								href="mailto:zahwatri.riyanto@gmail.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-light-blue">
								zahwatri.riyanto@gmail.com
							</a>
						</div>
					</div>
					<div className="flex justify-start text-left ml-24 mb-10">
						<div>
							<span className="mr-4">
								<i className="fa-solid fa-location-dot"></i>
							</span>
							<a
								type="button"
								href="https://www.google.com/maps/place/Pontianak"
								target="_blank"
								rel="noreferrer"
								className="hover:text-light-blue">
								Pontianak, Kalimantan Barat
							</a>
						</div>
					</div>
				</div>
				<div className="w-1/2" style={{ width: "725px" }}>
					<p className="mx-16 text-2xl text-center">
						Hello, my name is&nbsp;
						<span className="text-light-blue">Zahwa</span> Tri
						Riyanto. I am a bachelor&apos;s degree student in
						Informatics Engineering major, and programming is one of
						my passion in life. I&apos;m a fast learner and love to
						learn and try new things about programming. Becoming a
						professional programmer is one of my dreams.
					</p>
					<p className="mx-16 text-2xl text-center mt-10">
						“For the things we have to learn before we can do them,
						we learn by doing them.” ―&nbsp;
						<span className="text-orange">Aristotle</span>
					</p>
				</div>
			</div>
		</div>
	);
}
