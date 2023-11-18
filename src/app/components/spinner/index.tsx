import React from "react";
import { BounceLoader } from "react-spinners";

type Props = {
  size?: number;
};

const Spinner = ({ size = 100 }: Props) => {
  return (
    <div className="flex items-center justify-center mt-20 w-full">
      <BounceLoader size={size} color="#ffcb13" />
    </div>
  );
};

export default Spinner;
