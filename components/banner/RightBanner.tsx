import Image from "next/image";

const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <Image
                className="lgl:w-[520px] lgl:h-[580px] z-10 object-contain"
                src="/images/myImg.png"
                loading="lazy"
                alt="Suraj Randhari"
                width={520}
                height={580}
            />
            <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    );
};

export default RightBanner;
