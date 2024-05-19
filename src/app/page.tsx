"use client"

import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav"
import {GridComponent} from "@/components/GridComponent";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Email from "@/components/Email";


const navItems = [
    {
        name: "About",
        link: "#grid"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Jobs",
        link: "#jobs"
    },
    {
        name: "Contact",
        link: "#contact"
    }
];

export default function Home() {
    return (
        <>
            <main
                className="relative flex flex-col overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center">
                <div className="max-w-7xl w-full">
                    <FloatingNav navItems={navItems}/>
                    <Hero/>
                    <GridComponent/>
                    <Stats/>
                    <Projects/>
                    <AboutMe/>

                    <Email/>
                    <Footer/>
                </div>
            </main>
        </>
    );
}
