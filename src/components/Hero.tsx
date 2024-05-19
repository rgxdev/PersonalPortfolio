import React from 'react';
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {HeroOrbit} from "@/components/other/HeroOrbit";
import {SkillCard} from "@/components/other/SkillCard";

const skills = [
    {title: "Building Sites", description: "Expert in building sites with modern technologies."},
    {title: "Future-oriented", description: "Always looking ahead to the future."},
    {title: "Software Engineer", description: "Proficient in multiple programming languages."},
    {title: "Based in Germany", description: "Experience working with international teams."},
    {title: "Love to build things", description: "Passionate about creating new projects."},
];

const Hero = () => {
    return (
        <div className="pb-20 pt-36 lg:pb-5 lg:pt-5 min-h-screen max-h-screen relative z-10">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div
                className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03]
                bg-grid-black/[0.2] flex items-center justify-center
                absolute top-0">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className="flex items-center justify-center min-h-screen relative">
                <div
                    className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-10">
                    <div className="flex flex-col items-center lg:items-start lg:text-left lg:w-1/2 space-y-4">
                        <h2 className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
                            Building Sites
                        </h2>
                        <TextGenerateEffect
                            words={"Bringing the future to you."}
                            className="text-[40px] md:text-5xl lg:text-6xl text-center lg:text-left font-bold dark:text-white text-black"
                        />
                        <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                            Hey, I&apos;m Aaron, a software engineer <br/> based in Germany, and I love to build things.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#projects">
                                <MagicButton title="Show my work" icon={<FaLocationArrow/>} position={"right"}/>
                            </a>
                        </div>
                        <div className="block lg:hidden">
                            <SkillCard/>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center lg:pl-10">
                        <HeroOrbit/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
