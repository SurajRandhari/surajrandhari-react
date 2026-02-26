"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinksdata } from "@/lib/constants";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <Image src="/images/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={_id}
                        >
                            <a href={`#${link}`}>{title}</a>
                        </li>
                    ))}
                </ul>

                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                >
                    <FiMenu />
                </span>

                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-50">
                        <div className="flex flex-col gap-8 py-2 relative">
                            <div>
                                <Image
                                    className="w-32"
                                    src="/images/logo1.png"
                                    alt="logo1"
                                    width={128}
                                    height={50}
                                />
                                <p className="text-sm text-gray-400 mt-2">
                                    Full Stack Developer & UI Designer based in India.
                                </p>
                            </div>
                            <ul className="flex flex-col gap-4">
                                {navLinksdata.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                    >
                                        <a
                                            href={`#${item.link}`}
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    Find me in
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaFacebookF />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaInstagram />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaLinkedinIn />
                                    </span>
                                </div>
                            </div>
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
