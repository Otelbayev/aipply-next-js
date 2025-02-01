import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({
  title,
  img,
  desc,
  month,
  path,
}: {
  title: string;
  img: string;
  desc: string;
  month: string;
  path: string;
}) => {
  return (
    <div className="p-4 border border-gray-300 flex items-center justify-between flex-col gap-4 rounded-xl">
      <div className="gr-title text-2xl text-center font-bold">{title}</div>
      <Image src={img} width={150} height={150} alt={title} />
      <p className="text-center text-gray-500">{desc}</p>
      <div className="gr-title text-xl">{month}</div>
      <Link
        href={path}
        className="bg-gr w-full text-center py-2 rounded-md text-white"
      >
        Batafsil
      </Link>
    </div>
  );
};

export default CourseCard;
