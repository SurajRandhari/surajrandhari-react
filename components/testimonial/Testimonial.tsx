"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "@/components/layouts/Title";

const testimonials = [
    {
        id: 1,
        img: "/images/testmonial/testimonialOnee.png",
        badge: "Bound - Trolola",
        name: "Jone Duone Joe",
        role: "Operation Officer",
        project: "Travel Mobile App Design.",
        date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis exercitationem repudiandae facilis id neque nihil accusantium perspiciatis repellat? Iste.",
    },
    {
        id: 2,
        img: "/images/testmonial/testimonialTwoo.png",
        badge: "Bound - Trolola",
        name: "Jone Duone Joe",
        role: "Operation Officer",
        project: "Travel Mobile App Design.",
        date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis exercitationem repudiandae facilis id neque nihil accusantium perspiciatis repellat? Iste.",
    },
    {
        id: 3,
        img: "/images/testmonial/testimonialThree.png",
        badge: "Bound - Trolola",
        name: "Jone Duone Joe",
        role: "Operation Officer",
        project: "Travel Mobile App Design.",
        date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis exercitationem repudiandae facilis id neque nihil accusantium perspiciatis repellat? Iste.",
    },
];

const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) {
                emblaApi.scrollTo(index);
                setSelectedIndex(index);
            }
        },
        [emblaApi]
    );

    return (
        <section
            id="testimonial"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="WHAT CLIENTS SAY" des="Testimonial" />
            </div>
            <div className="max-w-6xl mx-auto relative">
                {/* Navigation Arrows */}
                <div className="absolute top-0 right-0 flex gap-2 z-10">
                    <button
                        onClick={scrollPrev}
                        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center shadow-shadowOne cursor-pointer"
                    >
                        <HiArrowLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center shadow-shadowOne cursor-pointer"
                    >
                        <HiArrowRight />
                    </button>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden mt-16" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t) => (
                            <div key={t.id} className="min-w-0 flex-[0_0_100%]">
                                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                                    {/* Left Card */}
                                    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                        <Image
                                            src={t.img}
                                            alt={t.name}
                                            width={300}
                                            height={340}
                                            className="md:h-32 lgl:h-72 rounded-lg object-cover"
                                        />
                                        <div className="w-full flex flex-col justify-end">
                                            <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                                {t.badge}
                                            </p>
                                            <h3 className="text-2xl font-bold">{t.name}</h3>
                                            <p className="text-base tracking-wide text-gray-500">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Right Card */}
                                    <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                        <Image
                                            src="/images/testmonial/quote.png"
                                            alt="quote"
                                            width={80}
                                            height={60}
                                            className="w-20 lgl:w-32"
                                        />
                                        <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                            <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                                <div>
                                                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                        {t.project}
                                                    </h3>
                                                    <p className="text-base text-gray-400 mt-3">
                                                        {t.date}
                                                    </p>
                                                </div>
                                                <div className="text-yellow-500 flex gap-1 mt-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <RiStarFill key={i} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                                {t.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <ul className="flex gap-4 justify-center mt-8">
                    {testimonials.map((_, i) => (
                        <li key={i}>
                            <button
                                onClick={() => scrollTo(i)}
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: i === selectedIndex ? "#00FF42" : "gray",
                                    cursor: "pointer",
                                    border: "none",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Testimonial;
