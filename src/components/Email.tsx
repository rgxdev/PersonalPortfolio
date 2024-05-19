import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {FaEnvelope} from "react-icons/fa";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import getStats from "@/utils/getStats";

const ContactMe = () => {
    const email = "contact@d-aaron.dev";

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

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
        >
            <div className="text-center mb-12">
                <Button onClick={handleEmailClick} className="items-center space-x-2 mb-5 mt-10">
                    <FaEnvelope/>
                    <span>Contact Me</span>
                </Button>
                <h2 className="text-1xl leading-9 font-extrabold text-gray-400 sm:leading-10">
                    {email}
                </h2>
            </div>
        </motion.div>
    );
};

export default ContactMe;
