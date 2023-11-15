import React from "react";

import Wrapper from "@/app/components/UI/Wrapper";
import Header from "@/app/components/header";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <>
      <Wrapper component="section" customClass="h-[100vh] w-full">
        <h1>Hello world</h1>
      </Wrapper>
    </>
  );
};

export default HomeContainer;
