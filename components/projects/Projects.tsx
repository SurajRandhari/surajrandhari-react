import Image from "next/image";
import Title from "@/components/layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/socialmediaa.jpg"
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/ecommerse.jpg"
                />
                <ProjectsCard
                    title="Chatting App"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/tictac.png"
                />
                <ProjectsCard
                    title="Portfolio Website"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/portfolio.png"
                />
                <ProjectsCard
                    title="IMDB Clone"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/imdbclone.png"
                />
                <ProjectsCard
                    title="Crypto Tracker"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src="/images/projects/crypto.png"
                />
            </div>
        </section>
    );
};

export default Projects;
