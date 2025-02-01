import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageCarousel from "../_components/image-carousel";
import Mentors from "../_components/mentors";
import { comments, courses, results, why } from "@/constants";
import WhyItem from "../_components/why-item";
import CourseCard from "../_components/course-card";
import Partners from "../_components/partners";

const HomePage = () => {
  return (
    <div>
      {/* Showcase */}
      <div className="relative bg-[url('/bg-mobile.png')] md:bg-[url('/bg.png')] bg-cover bg-bottom md:bg-top h-[91dvh] flex items-center justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-1/4 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/4 after:bg-gradient-to-t after:from-white after:to-transparent">
        <div className="max-w-6xl mx-auto  px-4 xl:px-0 w-full h-full flex flex-col space-y-5 justify-around md:justify-center">
          <h1 className="z-50 gr-title text-4xl md:text-6xl lg:text-8xl font-bold py-4 w-full text-center md:text-left md:w-[80%] ">
            Daromadli kelajak sari qadam tashlang!
          </h1>
          <div className="z-50 block md:hidden"></div>
          <div className="z-50 bg-white/40 border border-blue-200 rounded-xl flex flex-col items-center justify-center gap-5 py-8 px-5 mx-3 md:px-10 md:py-10  md:w-[500px] backdrop-blur-sm">
            <div className="text-3xl md:text-4xl md:py-2 font-bold gr-title text-center">
              Ochiq darsga yoziling!
            </div>
            <Button className="bg-gr w-full text-xl h-10">
              Ro'yxatdan o'tish
            </Button>
          </div>
        </div>
      </div>
      {/* Statistics */}
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="gr-title title">
          “Aipply Academy” natijasi raqamlarda
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="border border-blue-400 rounded-xl p-4">
            <div className="text-7xl font-bold gr-title">80%</div>
            <div className="font-bold gr-title text-2xl py-3">
              Muvaffaqiyatli tugatganlar
            </div>
            <Image
              src="/images/about1.webp"
              width={200}
              height={200}
              alt="image"
            />
          </div>
          <div className="border border-blue-400 rounded-2xl p-5">
            <div className="text-7xl font-bold gr-title">95%</div>
            <div className="font-bold gr-title text-xl py-3">
              Ishga joylashgan bitiruvchilarimiz
            </div>
            <Image
              src="/images/about2.webp"
              width={200}
              height={200}
              alt="image"
            />
          </div>
          <div className="border border-blue-400 rounded-xl p-4 flex flex-col justify-between">
            <div className="font-bold  gr-title text-2xl md:text-3xl py-3">
              Bitiruvchilarning o‘rtacha maoshi
            </div>
            <div className="w-full py-5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl text-gray-600">
                  Dasturlash
                </span>
                <span className="font-bold text-3xl ">$330</span>
              </div>
              <div className="flex items-center mt-2 justify-between">
                <span className="font-bold text-2xl text-gray-600">Dizayn</span>
                <span className="font-bold text-3xl ">$350</span>
              </div>
            </div>
            <div className="text-gray-600 text-md italic ">
              O'quv markazini endi tugatgan bitiruvchilarning o'rtacha maoshi.
              Tajriba ortgani sayin zamonaviy kasblarda daromad ham muntazam
              oshib boradi.
            </div>
          </div>
        </div>
      </div>
      {/* Results */}
      <div>
        <div className="gr-title title max-w-6xl mx-auto px-4 xl:px-0">
          O’quvchilar natijasi
        </div>
        <ImageCarousel images={results} width={300} />
      </div>
      {/* Why */}
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="gr-title title">Nega aynan Aipply Academy?</div>
        <div className="grid grid-cols-2 gap-2 ld:gap-5">
          {why.map((item) => (
            <WhyItem key={item.title} title={item.title} img={item.img} />
          ))}
        </div>

        <div className="mt-10 md:mt-20 bg-blue-100 p-7 md:p-10 rounded-2xl shadow-lg flex gap-5 md:gap-10 flex-col lg:flex-row">
          <div>
            <div className="text-2xl md:text-4xl font-semibold text-gray-700 mb-5">
              O'zbekistondagi birinchi Sun'iy intellektga ixtisoslashtirilgan
              zamonaviy kasblar o'quv markazi!
            </div>
            <div className="rounded-xl p-7 bg-white">
              <div className="gr-title text-center font-bold text-2xl lg:text-3xl mb-3 md:mb-5">
                Ochiq darsga yoziling!
              </div>
              <Button className="bg-gr w-full text-xl h-10 rounded-lg">
                Ro'yxatdan o'tish
              </Button>
            </div>
          </div>
          <Image
            src={"/images/banner.png"}
            className="w-full md:w-auto"
            width={645}
            height={477}
            alt="image"
          />
        </div>
      </div>
      {/* Comments */}
      <div>
        <div className="gr-title title max-w-6xl mx-auto px-4 xl:px-0">
          Izohlar
        </div>
        <ImageCarousel images={comments} width={450} />
      </div>
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        {/* Corses */}
        <div>
          <div className="title gr-title">Mavjud kurslar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {courses.map((item) => (
              <CourseCard key={item.title} {...item} />
            ))}
          </div>
        </div>
        {/* Partners */}
        <Partners />
        {/* Mentors */}
        <Mentors />
      </div>
    </div>
  );
};

export default HomePage;
