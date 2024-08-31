"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/feedback";

export function CTEFeedback() {
	return (
		<div className="mx-14 h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [
	{
		quote: "CodeTechEra transformed my approach to learning. The workshops are incredibly practical, and the guidance from industry experts was invaluable. I now feel more confident tackling real-world tech challenges.",
		name: "Charles Dickens",
		title: "Transformative Learning Experience",
	},
	{
		quote: "The hands-on projects at CodeTechEra provided me with the experience I needed to stand out in the job market. The curriculum is thorough, and the mentorship has been top-notch.",
		name: "Jordan S",
		title: "Hands-On Experience That Matters",
	},
	{
		quote: "I was amazed by how much I learned through CodeTechEra's innovative workshops. The blend of theory and practical application helped me grasp complex concepts and apply them effectively.",
		name: "Riley M",
		title: "Innovative and Practical Workshops",
	},
	{
		quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote: "CodeTechEra’s comprehensive learning approach gave me a solid foundation in both ML and full-stack development. The expert instructors and real-world projects were instrumental in advancing my career.",
		name: "Taylor W",
		title: "Comprehensive and Career-Boosting",
	},
];
