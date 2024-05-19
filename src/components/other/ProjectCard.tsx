import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import getStats from "@/utils/getStats";
import Image from "next/image";

const ProjectCard = ({project}: { project: any }) => {
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
                visible: {opacity: 1, z: 0},
                hidden: {opacity: 0, z: 50},
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="flex flex-col h-full" // Added flex and h-full here
        >
            <div
                className="shadow-md rounded-lg p-6 flex flex-col justify-between border border-black-200 h-full"> {/* Added h-full here */}
                <div>
                    <Image src={project.previewImage} alt={project.name}
                           className="rounded-md mb-4 w-full h-48 object-cover" width={500} height={300}
                           draggable={false} title={project.name + " Start Page Screenshot"}/>
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.dateRange}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string) => (
                            <span key={tag}
                                  className="bg-purple/20 text-gray-800 dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded-md">{tag}</span>
                        ))}
                    </div>
                    <a href={project.href}
                       className="text-purple font-semibold mt-auto"
                       title={"Call link to website"}>Website</a>

                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
