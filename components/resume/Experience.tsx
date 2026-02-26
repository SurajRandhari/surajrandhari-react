"use client";

import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Front-End Developer"
                        subTitle="Grabatic - (2022 - 2023)"
                        result="Jagdalpur"
                        des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />
                    <ResumeCard
                        title="Data Operator"
                        subTitle="MECON Limited - (2021 - 2022)"
                        result="Nagarnar"
                        des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
                    />
                    <ResumeCard title="" subTitle=" - (2020 - 2021)" result="O" des="" />
                </div>
            </div>
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                    <h2 className="text-4xl font-bold">Trainer Experience</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
