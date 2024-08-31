"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/GalleryGrid";

import p1 from "@/public/pi.jpg";

export function LayoutGridDemo() {
	return (
		<div className="h-screen py-20 w-full">
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
				A serene and tranquil retreat, this house in the woods
				offers a peaceful escape from the hustle and bustle of
				city life.
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
				Perched high above the world, this house offers
				breathtaking views and a unique living experience.
				It&apos;s a place where the sky meets home, and
				tranquility is a way of life.
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
				A house surrounded by greenery and nature&apos;s beauty.
				It&apos;s the perfect place to relax, unwind, and enjoy
				life.
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
				A house by the river is a place of peace and
				tranquility. It&apos;s the perfect place to relax,
				unwind, and enjoy life.
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
