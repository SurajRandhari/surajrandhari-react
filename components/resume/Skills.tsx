"use client";

import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
                </div>
                <div className="mt-14 w-full flex flex-col gap-6">
                    {[
                        { label: "Photoshop", width: "w-full" },
                        { label: "Figma", width: "w-[90%]" },
                        { label: "Adobe XD", width: "w-[60%]" },
                        { label: "Adobe Illustrator", width: "w-[70%]" },
                        { label: "Design", width: "w-[95%]" },
                    ].map(({ label, width }) => (
                        <div key={label} className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">{label}</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className={`${width} h-full bg-gradient-to-r from-blue-600 via-lime-500 to-green-500 rounded-md relative`}
                                >
                                    <span className="absolute -top-7 right-0">
                                        {width === "w-full" ? "100%" : width.replace("w-[", "").replace("]", "")}
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
                </div>
                <div className="flex flex-col gap-6">
                    {[
                        { label: "HTML 5", width: "w-full" },
                        { label: "CSS", width: "w-[95%]" },
                        { label: "JavaScript", width: "w-[80%]" },
                        { label: "Next.js", width: "w-[75%]" },
                        { label: "React.js", width: "w-[90%]" },
                    ].map(({ label, width }) => (
                        <div key={label} className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">{label}</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className={`${width} h-full bg-gradient-to-r from-blue-600 via-lime-500 to-green-500 rounded-md relative`}
                                >
                                    <span className="absolute -top-7 right-0">
                                        {width === "w-full" ? "100%" : width.replace("w-[", "").replace("]", "")}
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
