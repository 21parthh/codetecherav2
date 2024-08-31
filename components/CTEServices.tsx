import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { HoverEffect } from "./ui/ServicesCard";

const CTEServices = () => {
	const words = ["better", "flexible", "beautiful", "modern"];
	const projects = [
		{
			title: "Web Development",
			description:
				"Build responsive, high-performance websites and applications that provide an exceptional user experience.",
			link: "/",
		},
		{
			title: "Mobile App Development",
			description:
				"Create native and cross-platform mobile apps that perform seamlessly on any device.",
			link: "/",
		},
		{
			title: "UI/UX Design",
			description:
				"Develop intuitive and engaging interfaces to enhance user satisfaction and usability.",
			link: "/",
		},
		{
			title: "Cloud Solutions",
			description:
				"Implement scalable and secure cloud services that support your business growth and flexibility.",
			link: "/",
		},
		{
			title: "Artificial Intelligence & Machine Learning",
			description:
				"Develop scalable and secure AI/ML-powered cloud services that enhance your business growth and adaptability",
			link: "/",
		},
		{
			title: "Custom Software Development",
			description:
				"Tailored software solutions designed to meet your unique needs, delivering functionality and efficiency.",
			link: "/",
		},
	];
	return (
		<>
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
		</>
	);
};

export default CTEServices;
