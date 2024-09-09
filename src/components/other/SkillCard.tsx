"use client";
import { CardStack } from "@/components/ui/CardStack";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image"; // Adjust the path to your image file

export function SkillCard() {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				visible: { opacity: 1, z: 0 },
				hidden: { opacity: 0, z: -100 },
			}}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="relative h-[25rem] flex items-center justify-center w-full">
				{/* Unscharfer Hintergrund */}
				<div className="absolute inset-0 bg-blue-800 w-36 h-32 -left-14 -top-3 blur-xl opacity-80" />

				{/* Inhalt, der nicht unscharf ist */}
				<div className="relative z-10 flex items-center justify-center w-full h-full">
					<Image
						src={"/images/whatiwork.svg"}
						alt="Arrow pointing to the component"
						className="absolute -top-3 -rotate-[20deg] -left-14 w-32 h-32"
						height={400}
						width={400}
						draggable={false}
					/>

					<CardStack items={CARDS} />
				</div>
			</div>
		</motion.div>
	);
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children }: { children: React.ReactNode }) => {
	return (
		<span className="font-bold bg-purple/[0.2] text-purple px-1 py-0.5">
			{children}
		</span>
	);
};

const CARDS = [
	{
		id: 0,
		name: "TailwindCSS",
		designation: "Utility-First CSS Framework",
		content: (
			<p>
				TailwindCSS provides low-level utility classes to build{" "}
				<Highlight>custom designs</Highlight> without writing CSS.
			</p>
		),
		icon: RiTailwindCssFill,
	},
	{
		id: 1,
		name: "NextJS",
		designation: "React Framework",
		content: (
			<p>
				Next.js gives you the <Highlight>best developer</Highlight> experience
				with all the features you need for <Highlight>production</Highlight>.
			</p>
		),
		icon: RiNextjsFill,
	},
	{
		id: 2,
		name: "ExpressJS",
		designation: "Web API Framework",
		content: (
			<p>
				Express is a <Highlight>fast, unopinionated, minimalist</Highlight> web
				framework for Node.js.
			</p>
		),
		icon: RiNodejsFill,
	},
];

export default SkillCard;
