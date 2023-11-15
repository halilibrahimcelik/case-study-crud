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
      //   whileTap={{ scale: 0.95 }}
      className=" border flex justify-center py-2  w-full"
    >
      {children}
    </motion.li>
  );
};
