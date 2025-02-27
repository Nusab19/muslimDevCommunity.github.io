"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";

import { TelegramChannelLink, GithubOrgLink } from "@/lib/config";
import { Separator } from "./ui/separator";
import React from "react";

const LINKS = {
  Telegram: TelegramChannelLink,
  Github: GithubOrgLink,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <MaxWidthWrapper className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center justify-center gap-2">
        {/* <Image
          src="images/logo.jpeg"
          alt="Muslim Developers Community"
          width={45}
          height={45}
          className="rounded-md"
        /> */}
        <span className="text-2xl font-bold tracking-tighter text-accent">
          MDC
        </span>
      </div>

      {/* Desktop navigation */}
      <div className="hidden space-x-2 md:block">
        {Object.entries(LINKS).map(([name, url]) => (
          <Button
            key={name}
            variant="ghost"
            className="font-mono text-foreground/90"
            asChild
          >
            <Link href={url} target="_blank">
              {name}
            </Link>
          </Button>
        ))}
      </div>

      {/* Mobile navigation */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleDrawer}>
            <BurgerIcon isOpen={isOpen} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
          <DrawerDescription className="sr-only">
            Access community links
          </DrawerDescription>
          <div className="mb-16 mt-8 flex flex-col gap-2 p-2">
            {Object.entries(LINKS).map(([name, url]) => (
              <React.Fragment key={name}>
                <Button
                  variant="ghost"
                  className="justify-start font-mono text-foreground/90"
                  asChild
                >
                  <Link href={url} target="_blank">
                    {name}
                  </Link>
                </Button>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </MaxWidthWrapper>
  );
};

const BurgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {isOpen ? (
      <>
        <motion.path
          key="path1"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 3 16.5 L 17 2.5"
        />
        <motion.path
          key="path2"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          opacity="0"
        />
        <motion.path
          key="path3"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 3 2.5 L 17 16.346"
        />
      </>
    ) : (
      <>
        <motion.path
          key="path4"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
        />
        <motion.path
          key="path5"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          opacity="1"
        />
        <motion.path
          key="path6"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
        />
      </>
    )}
  </svg>
);

export default Navbar;
