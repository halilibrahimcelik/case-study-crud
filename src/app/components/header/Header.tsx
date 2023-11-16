"use client";
import Wrapper from "@/app/components/UI/Wrapper";
import Link from "next/link";
import React from "react";
import CustomButon from "../UI/button";
import { usePathname } from "next/navigation";
import MobileHeader from "./mobileHeader";
import { motion } from "framer-motion";
type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="py-10"
    >
      <Wrapper component="nav">
        <ul className="  justify-between items-center flex">
          <li className="opacity-100    bg-transparent hover:opacity-75 duration-300 ease-in transition-opacity">
            <Link href={"/"}>
              <h1 className="text-3xl  lg:text-4xl xl:text-5xl">Acme</h1>
            </Link>
          </li>
          <li className="hidden lg:block">
            <ul className="flex gap-4 justify-between items-center">
              <li
                className={
                  pathname === "/products" ? "link-active link" : "link"
                }
              >
                <Link href="/products">Ürünler</Link>
              </li>
              <li className="link">
                <Link href="/">Stratejiler</Link>
              </li>
              <li className="link">
                <Link href="/">Plan</Link>
              </li>
              <li className="link">
                <Link href="/">Blog</Link>
              </li>
              <li className="link">
                <Link href="/">Destek</Link>
              </li>
            </ul>
          </li>
          <li className="hidden lg:block">
            <ul className="flex gap-2 justify-between items-center">
              <li className="">
                <CustomButon
                  text="Oturum Aç"
                  color="primary"
                  variant="outlined"
                  customClass="font-medium"
                />
              </li>
              <li className="">
                <CustomButon
                  text="Ücretsiz Dene"
                  color="primary"
                  variant="contained"
                  customClass="font-medium"
                />
              </li>
            </ul>
          </li>
          <li className="block lg:hidden">
            <MobileHeader />
          </li>
        </ul>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
