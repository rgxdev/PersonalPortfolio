import React, {useEffect} from 'react';
import {projectList} from "@/data";
import ProjectCard from "@/components/other/ProjectCard";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import getStats from "@/utils/getStats";

const Projects = () => {
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
                visible: {opacity: 1, x: 0},
                hidden: {opacity: 0, x: 50},
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            <section className="py-12" id={"projects"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
                            My Projects
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-600 dark:text-gray-300 sm:mt-4">
                            I&apos;ve worked on a variety of projects, from simple websites to complex web applications.
                            Here are a few of my favorites.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        {projectList.map(project => (
                            <motion.div
                                key={project.name}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                                className="flex" // Added flex class here
                            >
                                <ProjectCard key={project.name} project={project}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;
