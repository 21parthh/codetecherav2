"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import pi from "@/public/pi.jpg";

export function ExpandableCardDemo() {
	const [active, setActive] = useState<
		(typeof cards)[number] | boolean | null
	>(null);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black-100 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0  grid place-items-center z-[100]">
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-black-100 sm:rounded-3xl overflow-auto"
						>
							<motion.div
								layoutId={`image-${active.title}-${id}`}
							>
								<Image
									priority
									width={200}
									height={200}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-600 dark:text-neutral-400 text-base"
										>
											{
												active.description
											}
										</motion.p>
									</div>

									<motion.a
										layout
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										exit={{
											opacity: 0,
										}}
										href={
											active.ctaLink
										}
										target="_blank"
										className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
									>
										{active.ctaText}
									</motion.a>
								</div>
								<div className="pt-4 relative px-4">
									<motion.div
										layout
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										exit={{
											opacity: 0,
										}}
										className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
									>
										{typeof active.content ===
										"function"
											? active.content()
											: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-black-100 rounded-xl cursor-pointer"
					>
						<div className="flex gap-4 flex-col  w-full">
							<motion.div
								layoutId={`image-${card.title}-${id}`}
							>
								<Image
									width={100}
									height={100}
									src={card.src}
									alt={card.title}
									className="h-60 w-full  rounded-lg object-cover object-top"
								/>
							</motion.div>
							<div className="flex justify-center items-center flex-col">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
								>
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};

const cards = [
	{
		description: "Java With Spring Boot",
		title: "Java Full Stack",
		src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1724862131/possessed-photography-jIBMSMs4_kA-unsplash_f7pi6n.jpg",
		ctaText: "Visit",
		ctaLink: "https://www.jotform.com/form/242392832919465",
		content: () => {
			return (
				<p>
					{" "}
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Eum, ullam iusto modi assumenda,
					impedit dolorum voluptatum harum mollitia neque
					accusantium eveniet reprehenderit ipsum quaerat
					eligendi veniam id consectetur quis quo!
				</p>
			);
		},
	},
	{
		description: "Machine Learning from basics",
		title: "ML WITH PYTHON",
		src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1724862131/possessed-photography-jIBMSMs4_kA-unsplash_f7pi6n.jpg",
		ctaText: "Visit",
		ctaLink: "https://www.jotform.com/form/242392832919465",
		content: () => {
			return (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Tenetur, placeat commodi? Sunt, autem
					facere. Eveniet autem vitae, soluta assumenda,
					suscipit aliquam similique saepe deserunt id,
					commodi quae odio vero beatae!
				</p>
			);
		},
	},

	// {
	// 	description: "Metallica",
	// 	title: "For Whom The Bell Tolls",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261081/cld-sample.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				Metallica, an iconic American heavy metal band, is
	// 				renowned for their powerful sound and intense
	// 				performances that resonate deeply with their
	// 				audience. Formed in Los Angeles, California, they
	// 				have become a cultural icon in the heavy metal
	// 				music industry. <br /> <br /> Their songs often
	// 				reflect themes of aggression, social issues, and
	// 				personal struggles, capturing the essence of the
	// 				heavy metal genre. With a career spanning over
	// 				four decades, Metallica has released numerous hit
	// 				albums and singles that have garnered them a
	// 				massive fan following both in the United States
	// 				and abroad.
	// 			</p>
	// 		);
	// 	},
	// },
	// {
	// 	description: "Lord Himesh",
	// 	title: "Aap Ka Suroor",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261083/cld-sample-4.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				Himesh Reshammiya, a renowned Indian music
	// 				composer, singer, and actor, is celebrated for his
	// 				distinctive voice and innovative compositions.
	// 				Born in Mumbai, India, he has become a prominent
	// 				figure in the Bollywood music industry. <br />{" "}
	// 				<br /> His songs often feature a blend of
	// 				contemporary and traditional Indian music,
	// 				capturing the essence of modern Bollywood
	// 				soundtracks. With a career spanning over two
	// 				decades, Himesh Reshammiya has released numerous
	// 				hit albums and singles that have garnered him a
	// 				massive fan following both in India and abroad.
	// 			</p>
	// 		);
	// 	},
	// },
	// {
	// 	description: "The Beatles",
	// 	title: "Let It Be",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261083/cld-sample-5.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				The Beatles, an iconic British rock band, is
	// 				celebrated for their innovative music and lasting
	// 				influence on popular culture. Formed in Liverpool
	// 				in the 1960s, the band consists of John Lennon,
	// 				Paul McCartney, George Harrison, and Ringo Starr.
	// 				<br /> <br /> Their music transcends genres,
	// 				blending rock, pop, and classical elements to
	// 				create timeless hits that continue to inspire
	// 				musicians and fans worldwide. The Beatles' impact
	// 				on music and culture is unparalleled, earning them
	// 				a place as one of the greatest bands of all time.
	// 			</p>
	// 		);
	// 	},
	// },
	// {
	// 	description: "Beyoncé",
	// 	title: "Halo",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261083/cld-sample-6.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				Beyoncé, an iconic American singer, songwriter,
	// 				and actress, is celebrated for her powerful vocals
	// 				and electrifying performances. Born in Houston,
	// 				Texas, she rose to fame as the lead singer of
	// 				Destiny's Child before launching a highly
	// 				successful solo career. <br /> <br /> Her music
	// 				blends elements of R&B, pop, and hip-hop, creating
	// 				chart-topping hits that have earned her numerous
	// 				awards and accolades. Beyoncé is widely regarded
	// 				as one of the most influential artists of her
	// 				generation, inspiring millions with her music and
	// 				advocacy for social justice.
	// 			</p>
	// 		);
	// 	},
	// },
	// {
	// 	description: "Coldplay",
	// 	title: "Yellow",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261083/cld-sample-7.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				Coldplay, a British rock band, is celebrated for
	// 				their emotive music and atmospheric sound. Formed
	// 				in London in 1996, the band consists of Chris
	// 				Martin, Jonny Buckland, Guy Berryman, and Will
	// 				Champion. <br /> <br /> Their music blends rock
	// 				and pop influences, creating a unique and
	// 				instantly recognizable sound that has earned them
	// 				a global fanbase. With numerous hit singles and
	// 				albums, Coldplay has become one of the most
	// 				successful bands of the 21st century, known for
	// 				their introspective lyrics and memorable live
	// 				performances.
	// 			</p>
	// 		);
	// 	},
	// },
	// {
	// 	description: "Adele",
	// 	title: "Someone Like You",
	// 	src: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1684261083/cld-sample-8.jpg",
	// 	ctaText: "Visit",
	// 	ctaLink: "https://ui.aceternity.com/templates",
	// 	content: () => {
	// 		return (
	// 			<p>
	// 				Adele, a British singer-songwriter, is renowned
	// 				for her powerful voice and heartfelt ballads. Born
	// 				in Tottenham, London, she has captivated audiences
	// 				worldwide with her emotional performances and
	// 				soulful music. <br /> <br /> Adele's songs often
	// 				explore themes of love, loss, and heartbreak,
	// 				resonating deeply with listeners across the globe.
	// 				With multiple Grammy Awards and chart-topping
	// 				albums, Adele has firmly established herself as
	// 				one of the most successful and influential artists
	// 				of her generation.
	// 			</p>
	// 		);
	// 	},
	// },
];
