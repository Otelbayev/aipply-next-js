import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="p-10 bg-gr rounded-2xl my-10">
      <div className="gr-white font-bold text-2xl md:text-4xl">
        Bitiruvchilarimiz ish joylari
      </div>
      <p className="gr-white text-xl md:text-2xl font-semibold mt-5">
        Aipplyning eng yaxshi bitiruvchilarini bizning hamkorlar –
        O'zbekistonning yetakchi kompaniyalari ishga qabul qiladilar.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 place-items-center">
        <Image src={"/partners/1.png"} alt="tstu" width={190} height={50} />
        <Image
          src={"/partners/2.png"}
          alt="o'liy va orta ta'lim vazrligi"
          width={90}
          height={90}
        />
        <Image
          src={"/partners/3.png"}
          alt="Davlat Belgisi"
          width={200}
          height={80}
        />
        <Image
          src={"/partners/4.png"}
          alt="maktab va maktabgacha ta'lim vazirligi"
          width={200}
          height={166}
        />
        <Image src={"/partners/5.png"} alt="sqb" width={200} height={111} />
        <Image src={"/partners/6.png"} alt="it park" width={145} height={47} />
        <Image src={"/partners/7.png"} alt="bilgi" width={200} height={98} />
        <Image src={"/partners/8.png"} alt="it bilim" width={200} height={63} />
      </div>
    </div>
  );
};

export default Partners;
