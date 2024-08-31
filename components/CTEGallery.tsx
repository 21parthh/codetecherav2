"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/GalleryGrid";

export function CTEGallery() {
	return (
		<div className="h-screen mb-10">
			<div className="h-[10rem] mt-28 flex justify-center items-center px-4">
				<div className=" text-center text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					Highlighting Our Journey <br />A Showcase of Past
					Workshops
				</div>
			</div>
			<LayoutGrid cards={cards} />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				R C Patel Institute of Technology
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Hands-on experiences and innovative projects from our ML
				and Java Full Stack training at RCPIT
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				IPS Academy Indore
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Featuring innovative projects and hands-on experiences
				from our ML and Java Full Stack training at IPS Academy,
				Indore.
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Malwa Institute of Science and Technology, Indore
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Discover the workshops that refined our expertise,
				showcasing innovative projects and practical experiences
				from our ML and Java Full Stack training at MIST.
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Zeal College of Engineering, Pune
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Highlighting creative projects and hands-on learning
				from our ML and Java Full Stack training at Zeal COE.
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "md:col-span-2",
		thumbnail:
			"https://res.cloudinary.com/dh5trkmtb/image/upload/v1724676707/pi_tryxcy.jpg",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1",
		thumbnail:
			"https://res.cloudinary.com/dh5trkmtb/image/upload/v1724676876/IMG_9455_roufvw.jpg",
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "col-span-1",
		thumbnail:
			"https://res.cloudinary.com/dh5trkmtb/image/upload/v1724676940/IMG_9454_ea4h0c.jpg",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "md:col-span-2",
		thumbnail:
			"https://res.cloudinary.com/dh5trkmtb/image/upload/v1724677008/IMG_9453_fi62ot.jpg",
	},
];
