import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Mentors() {
  const images = [
    { title: "", img: "/mentors/4.png" },
    { title: "", img: "/mentors/7.png" },
    { title: "", img: "/mentors/6.png" },
    { title: "Davronov Navodir", img: "/mentors/1.png" },
    { title: "", img: "/mentors/5.png" },
    { title: "O'telbayev Jasurbek", img: "/mentors/2.png" },
  ];

  return (
    <div>
      <div className="title gr-title">Bizning mentorlarimiz</div>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map(({ img, title }) => (
            <CarouselItem key={img} className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={img}
                width={320}
                className="w-full"
                height={362}
                alt={title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Mentors;
