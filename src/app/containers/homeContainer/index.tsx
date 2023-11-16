import React from "react";

import Wrapper from "@/app/components/UI/Wrapper";
import Header from "@/app/components/header/Header";
import HeroSection from "./hero";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <>
      <Wrapper component="section" customClass="h-[100vh] w-full">
        <HeroSection />
      </Wrapper>
    </>
  );
};

export default HomeContainer;
