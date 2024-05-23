"use client";

import {cn} from "@/lib/utils";
import {BentoCard, BentoGrid} from "@/components/magicui/BentoGrid";
import Marquee from "@/components/magicui/Marquee";
import Globe from "@/components/magicui/Globe";
import {FcElectronics, FcGlobe} from "react-icons/fc";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

const files = [
    {
        name: "PhP",
        body: "I started with PhP and MySQL. Back then I had created a minecraft server, after that I created websites using PhP.",
    },
    {
        name: "HTML",
        body: "I know how to use HTML.",
    },
    {
        name: "Java",
        body: "I created a few projects with Java. I have created a few plugins for minecraft servers.",
    },
    {
        name: "C#",
        body: "I worked with C# and Unity. I have created a few standard games with Unity. I have also created a few projects with C#.",
    },
    {
        name: "Javascript & Typescript",
        body: "I recently started with Javascript and Typescript. I have created a few projects with ReactJS and Express.",
    },
    {
        name: "NextJS",
        body: "I discovered NextJS and I am currently working on a project with NextJS. And im in love with it.",
    },
];

const features = [
    {
        Icon: FcElectronics,
        name: "My skills",
        description: "A quick preview of my skills.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: FcGlobe,
        name: "Multicultural",
        description: "I have worked with people from all over the world.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: null, // initially set to null
    },
];

export function GridComponent() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [showGlobe, setShowGlobe] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGlobe(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: {opacity: 1, x: 0},
                hidden: {opacity: 0, x: -100},
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
            className={"mt-28"}
        >
            <section id="grid">
                <BentoGrid>
                    {features.map((feature, idx) => (
                        <BentoCard
                            key={idx}
                            {...feature}
                            background={
                                feature.name === "Multicultural" && showGlobe ? (
                                    <Globe
                                        className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40"
                                    />
                                ) : (
                                    feature.background
                                )
                            }
                        />
                    ))}
                </BentoGrid>
            </section>
        </motion.div>
    );
}
