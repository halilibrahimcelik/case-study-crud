import * as React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 10, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MobileMenuItem = ({ children }: Props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex justify-center flex-col  py-2 text-xl  md:text-2xl  "
    >
      {children}
    </motion.li>
  );
};
