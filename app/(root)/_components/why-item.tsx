import Image from "next/image";
import React from "react";

const WhyItem = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="border border-blue-400/40 rounded-xl flex flex-col lg:flex-row gap-1 lg:gap-3 px-5 py-2 lg:px-5 lg:py-4">
      <Image
        src={img}
        alt={title}
        className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-cover"
        width={120}
        height={120}
      />
      <div className="gr-title  lg:py-4 text-md md:text-2xl lg:text-3xl font-semibold">
        {title}
      </div>
    </div>
  );
};

export default WhyItem;
