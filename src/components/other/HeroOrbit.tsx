import OrbitingCircles from "@/components/magicui/OrbitingCircles";
import {
    RiChromeFill,
    RiDiscordFill,
    RiGithubFill,
    RiNextjsFill,
    RiOpenaiFill,
    RiReactjsFill,
    RiSpotifyFill,
    RiTailwindCssFill
} from "react-icons/ri";
import {SiMongodb, SiPostman, SiWakatime, SiWebstorm} from "react-icons/si";


export function HeroOrbit() {
    return (
        <div
            className="relative flex h-[500px] w-[500px] items-center justify-center overflow-visible ">
            {/* Inner Circles */}
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <SiWebstorm className={"h-[20px] w-[20px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <RiGithubFill className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={5}
                radius={80}
            >
                <RiDiscordFill className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={15}
                radius={80}
            >
                <SiPostman className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={17.5}
                radius={80}
            >
                <RiChromeFill className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={2.5}
                radius={80}
            >
                <RiSpotifyFill className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={7.5}
                radius={80}
            >
                <RiOpenaiFill className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={12.5}
                radius={80}
            >
                <SiWakatime className={"h-[25px] w-[25px]"}/>
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={190}
                duration={20}
                delay={20}
            >
                <RiReactjsFill className={"h-[50px] w-[50px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={190}
                duration={20}
                delay={10}
            >
                <RiNextjsFill className={"h-[50px] w-[50px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={190}
                duration={20}
                delay={15}
            >
                <SiMongodb className={"h-[40px] w-[40px]"}/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={190}
                duration={20}
                delay={5}
            >
                <RiTailwindCssFill className={"h-[35px] w-[35px]"}/>
            </OrbitingCircles>
        </div>
    );
}
