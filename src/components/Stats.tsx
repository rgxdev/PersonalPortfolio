"use client"

import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import getStats, {getCommits, getHours} from "@/utils/getStats";
import NumberTicker from "@/components/magicui/NumberTicker";

const Stats = () => {
    const [stats, setStats] = useState({followerCount: 0, commits: 0, workHours: 0});

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
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 50},
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="py-20 z-20"
        >
            <section id="stats" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
                        Stats
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-600 dark:text-gray-300 sm:mt-4">
                        Here are some key statistics about my work and contributions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white dark:bg-black-200 shadow-lg rounded-lg p-6"
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">GitHub Followers</h3>
                        <p className="mt-2 text-3xl font-bold ">
                            <NumberTicker value={stats.followerCount}/>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white dark:bg-black-200 shadow-lg rounded-lg p-6"
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Commits</h3>
                        <p className="mt-2 text-3xl font-bold">
                            <NumberTicker value={getCommits()}/>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white dark:bg-black-200 shadow-lg rounded-lg p-6"
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Work Hours</h3>
                        <p className="mt-2 text-3xl font-bold ">
                            <NumberTicker value={getHours()}/>
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Stats;
