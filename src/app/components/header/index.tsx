"use client";
import Wrapper from "@/app/components/UI/Wrapper";
import Link from "next/link";
import React from "react";
import CustomButon from "./button";
import { usePathname } from "next/navigation";
type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="py-10">
      <Wrapper component="nav">
        <ul className="flex justify-between items-center">
          <li className="opacity-100 hover:opacity-75 duration-300 ease-in transition-opacity">
            <Link href={"/"}>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl">Acme</h1>
            </Link>
          </li>
          <li>
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
          <li>
            <ul className="flex gap-2 justify-between items-center">
              <li className="">
                <CustomButon
                  text="Oturum Aç"
                  color="primary"
                  variant="outlined"
                />
              </li>
              <li className="">
                <CustomButon
                  text="Ücretsiz Dene"
                  color="primary"
                  variant="contained"
                />
              </li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </header>
  );
};

export default Header;
