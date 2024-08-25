import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { FlipWords } from "./ui/FlipWords";
import { HoverEffect } from "./ui/ServicesCard";

const Hero = () => {
	const words = ["better", "flexible", "beautiful", "modern"];
	const projects = [
		{
			title: "Web Development",
			description:
				"A technology company that builds economic infrastructure for the internet.",
			link: "https://stripe.com",
		},
		{
			title: "Mobile App Development",
			description:
				"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
			link: "https://netflix.com",
		},
		{
			title: "UI/UX Design",
			description:
				"A multinational technology company that specializes in Internet-related services and products.",
			link: "https://google.com",
		},
		{
			title: "Cloud Solutions",
			description:
				"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
			link: "https://meta.com",
		},
		{
			title: "Artificial Intelligence & Machine Learning",
			description:
				"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
			link: "https://amazon.com",
		},
		{
			title: "Custom Software Development",
			description:
				"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
			link: "https://microsoft.com",
		},
	];
	return (
		<>
			<div className="pb-20 pt-30">
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight
					className="-top-28 left-80 h-[80vh] w-[50vw]"
					fill="blue"
				/>
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
			<div className="flex flex-col items-center justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 pb-2">
						Transforming Ideas into Digital Reality.
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl "
						words="CodeTechEra Build Brands With 360° Solutions"
					/>
					<p className="py-6 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi, We Are Team CodeTechEra: Leading the
						Charge in Tech Innovation.
					</p>
					<Button
						title="Explore New Courses"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</div>
				<div className="h-[10rem] mt-28 flex justify-center items-center px-4">
					<div className=" text-center text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
						Build
						<FlipWords words={words} /> <br />
						software with CodeTechEra
					</div>
				</div>
				<div className="max-w-5xl mx-auto px-8">
					<HoverEffect items={projects} />
				</div>
			</div>
		</>
	);
};

export default Hero;
