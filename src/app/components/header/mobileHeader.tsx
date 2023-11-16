"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import HamburgerToggle from "./hamburgerToggle";
import Link from "next/link";
import CustomButon from "../UI/button";
import { MobileMenuItem } from "./mobileMenuItem";

type Props = {};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 15,
      restDelta: 10,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const list = [
  { id: 1, jsx: <Link href="/products">Ürünler</Link> },
  { id: 2, jsx: <Link href="/">Stratejiler</Link> },
  { id: 3, jsx: <Link href="/">Plan</Link> },
  { id: 4, jsx: <Link href="/">Blog</Link> },
  { id: 5, jsx: <Link href="/">Destek</Link> },
  {
    id: 6,
    jsx: <CustomButon text="Oturum Aç" color="primary" variant="outlined" />,
  },
  {
    id: 7,
    jsx: (
      <CustomButon text="Ücretsiz Dene" color="primary" variant="contained" />
    ),
  },
];
const MobileHeader = (props: Props) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={` w-fit lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 top-0  z-10 right-0 h-[60vh] w-full bg-gradient-to-b  from-[#ffcc13c6] from-10% to-[#ccc6f5e2] to-90%    "
        variants={sidebar}
      >
        <motion.ul
          variants={variants}
          className="flex flex-col items-center justify-center h-full w-full gap-4"
        >
          {list.map((item) => {
            return <MobileMenuItem key={item.id}>{item.jsx}</MobileMenuItem>;
          })}
        </motion.ul>
      </motion.div>
      <HamburgerToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default MobileHeader;
