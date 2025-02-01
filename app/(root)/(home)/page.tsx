import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <div className="relative bg-[url('/bg-mobile.png')] md:bg-[url('/bg.png')] bg-cover bg-center h-[91vh] flex items-center justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-1/4 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/4 after:bg-gradient-to-t after:from-white after:to-transparent">
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col space-y-5 justify-around md:justify-center px-4 xl:px-0">
          <h1 className="z-50 gr-title text-4xl md:text-6xl lg:text-8xl font-bold py-4 w-full text-center md:text-left md:w-[80%] ">
            Daromadli kelajak sari qadam tashlang!
          </h1>
          <div className="z-50 block md:hidden"></div>
          <div className="z-50 bg-transparent md:bg-white/70 rounded-xl flex flex-col items-center justify-center gap-5 p-5 md:p-10 md:w-[500px] backdrop-blur-2xl">
            <div className="text-3xl md:text-4xl md:py-2 font-bold gr-title text-center">
              Ochiq darsga yoziling!
            </div>
            <Button className="bg-gr w-full text-xl h-10">
              Ro'yxatdan o'tish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
