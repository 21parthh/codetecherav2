import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
	return (
		<div>
			<h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black-100 via-black-100 to-black-100 dark:from-black-100 dark:via-white dark:to-white">
				Unlock Your Potential with
				<br /> at <Cover>Expert-Led Training Courses</Cover>
				<br />
				at CodeTechEra
			</h1>
		</div>
	);
}
