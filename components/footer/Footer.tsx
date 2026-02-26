import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
    {
        heading: "Quick Link",
        links: ["About", "Portfolio", "Services", "Blog", "Contact"],
    },
    {
        heading: "Resources",
        links: [
            "Authentication",
            "System Status",
            "Terms of Service",
            "Pricing",
            "Over Right",
        ],
    },
    {
        heading: "Developers",
        links: [
            "Documentation",
            "Authentication",
            "API Reference",
            "Support",
            "Open Source",
        ],
    },
];

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
            <div className="w-full h-full flex flex-col gap-8">
                <Image
                    src="/images/logo1.png"
                    alt="logo"
                    width={250}
                    height={80}
                />
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a
                            href="https://www.facebook.com/surajrandharioffecial/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a
                            href="https://www.instagram.com/suraj_randhari_/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a
                            href="https://www.linkedin.com/in/suraj-randhari/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
            </div>

            {footerLinks.map(({ heading, links }) => (
                <div key={heading} className="w-full h-full">
                    <h3 className="text-xl uppercase text-designColor tracking-wider">
                        {heading}
                    </h3>
                    <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                        {links.map((link) => (
                            <li key={link}>
                                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                                    {link}
                                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Footer;
