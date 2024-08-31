"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";

const content = [
	{
		title: "Innovative Workshops",
		description:
			"Participate in dynamic workshops that seamlessly integrate theoretical knowledge with practical application, ensuring you stay at the cutting edge of technology and innovation.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<Image
					src="https://res.cloudinary.com/dh5trkmtb/image/upload/v1725120300/mimi-thian-IPBGKYnuz8Y-unsplash_ug3cs9.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Expert Guidance",
		description:
			"Receive mentorship from seasoned industry professionals who offer deep insights and hands-on experience, helping you to not only understand but excel in the tech field.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<Image
					src="https://res.cloudinary.com/dh5trkmtb/image/upload/v1725120508/rivage-AQTA5E6mCNU-unsplash_id4zfa.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Real-World Projects",
		description:
			" Engage in hands-on projects that replicate real-world scenarios and industry challenges, providing you with valuable experience and a tangible portfolio to showcase your skills.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<Image
					src="https://res.cloudinary.com/dh5trkmtb/image/upload/v1725120840/carlos-muza-hpjSkU2UYSU-unsplash_jc3tls.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Comprehensive Learning",
		description:
			"Access a robust curriculum that spans a broad spectrum of technologies and methodologies, equipping you with a well-rounded understanding and a versatile skill set to tackle various tech challenges.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<Image
					src="https://res.cloudinary.com/dh5trkmtb/image/upload/v1725120982/ian-schneider-TamMbr4okv4-unsplash_zy4leb.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
];
export function CTEFeatures() {
	return (
		<div className="px-14 my-20 pt-20">
			<div className="h-[10rem] mt-18 flex justify-center items-center px-4">
				<div className=" text-center text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					Why Choose Us
				</div>
			</div>
			<StickyScroll content={content} />
		</div>
	);
}
