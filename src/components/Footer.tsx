import {RiGithubFill, RiInstagramFill, RiTwitterXFill, RiYoutubeFill} from "react-icons/ri";

const navigation = [
    {
        name: 'GitHub',
        href: 'https://github.com/rgxdev',
        icon: RiGithubFill
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/and.insta0',
        icon: RiInstagramFill
    },
    {
        name: 'X',
        href: 'https://x.com/rgxdev',
        icon: RiTwitterXFill
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/vipexde',
        icon: RiYoutubeFill
    },
]

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-300 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true"/>
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-300">
                        &copy; {year} rgxdev.
                    </p>
                </div>
            </div>
        </footer>
    )
}
