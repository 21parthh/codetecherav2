import { LayoutGridDemo } from "@/components/LayooutGrid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import { link } from "fs";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { StickyScrollRevealDemo } from "@/components/Scroll";
import { InfiniteMovingCards } from "@/components/ui/feedback";
import { InfiniteMovingCardsDemo } from "@/components/feedback";
import Footer from "@/components/footer";
import { BackgroundBeamsDemo } from "@/components/waitlist";

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
				<LayoutGridDemo />
				<StickyScrollRevealDemo />
				<InfiniteMovingCardsDemo />
				<BackgroundBeamsDemo />
				<Footer />
			</div>
		</main>
	);
}
