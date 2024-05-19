import React, {useEffect} from 'react';
import Image from "next/image";
import {Highlight} from "@/components/other/SkillCard";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import getStats from "@/utils/getStats";

const AboutMe = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getStats();
                console.log(response)
                // @ts-ignore
                setStats(response);
            } catch (error) {

            }
        };

        fetchStats();
    }, []);

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
                visible: {opacity: 1, x: -0},
                hidden: {opacity: 0, x: -50},
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            <section className="py-20 ">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
                                About me
                            </h2>
                        </div>
                        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300 mb-4">
                            Hey, my name is <Highlight>Aaron Driesch</Highlight>, a passionate software engineer based
                            in
                            Germany. I have a strong
                            background in
                            building modern web applications using the latest technologies. My journey in software
                            development started when I was a kid, I was <Highlight>10 years</Highlight> old when i
                            created
                            my first Minecraft
                            server. After that, I tried a lot of different things, like creating websites, games and
                            applications. I have always been <Highlight>fascinated</Highlight> by technology and the
                            endless
                            possibilities it
                            offers.
                        </p>
                        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300 mb-4">
                            I love to explore new technologies and continuously improve my skills. My goal is to build
                            scalable and efficient applications that provide a <Highlight>seamless user
                            experience</Highlight>. When I&apos;m not
                            coding, you can find me exploring the outdoors, being outside with my friends, or playing
                            video
                            games.
                        </p>
                        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
                            Let&apos;s connect and create something <Highlight>amazing</Highlight> together!
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="Aarons Image"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                            width={500}
                            height={500}
                            draggable={false}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutMe;
