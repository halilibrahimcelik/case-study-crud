import React from "react";
import { BounceLoader } from "react-spinners";

type Props = {
  size?: number;
};

const Spinner = ({ size = 60 }: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <BounceLoader size={size} color="#ffcb13" />
    </div>
  );
};

export default Spinner;
