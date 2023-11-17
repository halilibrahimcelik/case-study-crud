"use client";
import React from "react";
import Image from "next/image";
import PhoneBanner from "@/assets/phone-banner.svg";
import CustomButon from "@/app/components/UI/button";
import BottomCorner from "@/assets/corner-bottom.svg";
import TopCorner from "@/assets/corner-top.svg";
import CircleYellow from "@/assets/circle-yellow.svg";
import { motion } from "framer-motion";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="content p-4 relative lg:col-span-2  flex flex-col gap-4"
      >
        <h1 className=" leading-snug xl:leading-normal  text-[2.5rem]  md:text-[3rem]  lg:text-[3.8rem] font-bold">
          İşinizi Güçlendirecek <br /> Videolar
        </h1>
        <h1 className="leading-snug  text-[2.5rem]  md:text-[3rem]  lg:text-[3.8rem] font-bold text-[#5B44F3]">
          Artık İnteraktif
        </h1>
        <p className="text-base md:text-lg  xl:text-xl">
          Acme ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın. Tek
          hamlede binlerce kullanıcıdan zahmetsizce bilgi alın. Maliyetlerinizi
          azaltın, müşteri memnuniyetini ve satışlarınızı artırın.
        </p>

        <p className="text-base md:text-lg  xl:text-xl">
          Anlatan, seçenek sunan, bilgi toplayan videolarla çevrimiçi iletişimin
          yeni seviyesine adım atın.
        </p>
        <CustomButon
          color="secondary"
          variant="contained"
          text="Hemen Deneyin"
          customClass="font-bold w-fit"
        />
        <Image
          className="absolute bottom-0 right-0"
          src={BottomCorner}
          width={40}
          height={40}
          alt="top-corner"
        />
        <Image
          className="absolute top-0 left-0"
          src={TopCorner}
          width={40}
          height={40}
          alt="top-corner"
        />
        <Image
          src={CircleYellow}
          width={50}
          height={50}
          objectFit="contain"
          alt="circle-yellow"
          className="hidden absolute sm:block top-10 right-10 lg:right-[unset]  lg:top-40 lg:left-[-25px] xl:left-[-40px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="flex items-center justify-center lg:justify-end"
      >
        <Image
          src={PhoneBanner}
          alt="acme-phone-banner"
          className="w-full  md:w-auto md:h-auto "
          unoptimized
          objectFit="cover"
          placeholder="blur"
          blurDataURL="@/assets/phone-banner.svg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
