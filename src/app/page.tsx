"use client"

import Hero from "@/components/Hero";
import {GridComponent} from "@/components/GridComponent";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Email from "@/components/Email";


export default function Home() {
    return (
        <>
            <main
                className="relative flex flex-col overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center">
                <div className="max-w-7xl w-full">
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
