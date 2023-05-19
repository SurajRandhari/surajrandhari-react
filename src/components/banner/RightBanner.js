import React from "react";
import { myImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="lgl:w-[520px] lgl:h-[580px] z-10"
        src={myImg}
        loading="lazy"
        alt="myImg"
        width="full"
        height="full"
      />
      {/* <Image
        src={myImg}
        alt="myImg"
        width="full"
        height="full"
        className="lgl:w-[520px] lgl:h-[580px] z-10"
      /> */}

      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
