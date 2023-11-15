import React from "react";

import Wrapper from "@/app/components/UI/Wrapper";
import Header from "@/app/components/header/Header";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <>
      <Wrapper component="section" customClass="h-[100vh] w-full">
        <h1 className="bg">Hello world</h1>
      </Wrapper>
    </>
  );
};

export default HomeContainer;
