"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({
  images,
  width,
}: {
  images: string[];
  width?: number;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current && !isPaused) {
        carouselRef.current.scrollLeft += 2;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.concat(images).map((src, index) => (
          <Image
            key={index}
            src={src}
            width={width}
            height={500}
            alt={`Slide ${index}`}
            className="object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
