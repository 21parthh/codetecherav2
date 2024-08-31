// import { TabsDemo } from "@/components/courses/Preview";
import { ExpandableCardDemo } from "@/components/courses/Preview";
import { CoverDemo } from "@/components/courses/Tagline";
import Hero from "@/components/Hero";
import React from "react";

const Hello = () => {
	return (
		<div className="bg-black-100">
			<CoverDemo />
			<ExpandableCardDemo />
		</div>
	);
};

export default Hello;
