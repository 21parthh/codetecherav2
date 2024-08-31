import { CTEGallery } from "@/components/CTEGallery";
import Hero from "@/components/CTEHero";
import { FloatingNav } from "@/components/ui/Navbar";
import { link } from "fs";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { InfiniteMovingCards } from "@/components/ui/feedback";
import { CTEFeedback } from "@/components/CTEFeedback";
import CTEServices from "@/components/CTEServices";
import { CTEGlob } from "@/components/CTEGlob";
import { CTEFeatures } from "@/components/CTEFeatures";
import CTEFooter from "@/components/CTEFooter";
import { CTEWaitList } from "@/components/CTEWaitList";

export default function Home() {
	return (
		<main className="relative top-0 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[
						{
							name: "Home",
							link: "/",
							icon: <FaHome />,
						},
						{
							name: "Courses",
							link: "/courses",
							icon: <FaHome />,
						},
					]}
				/>
				<Hero />
				<CTEServices />
				<CTEGlob />
				<CTEGallery />
				<CTEFeatures />
				<CTEFeedback />
				<CTEWaitList />
				<CTEFooter />
			</div>
		</main>
	);
}
