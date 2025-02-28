"use client";

import { useState } from "react";
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
        <span className="text-2xl font-black tracking-tighter text-accent">
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
            <MenuIcon isOpen={isOpen} />
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

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* First line (top) */}
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        initial={false}
        animate={isOpen ? 
          { x1: 4, y1: 4, x2: 20, y2: 20 } : 
          { x1: 4, y1: 6, x2: 20, y2: 6 }
        }
        transition={{ duration: 0.3 }}
      />
      
      {/* Middle line */}
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        initial={false}
        animate={isOpen ? 
          { opacity: 0 } : 
          { opacity: 1 }
        }
        transition={{ duration: 0.2 }}
      />
      
      {/* Bottom line */}
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        initial={false}
        animate={isOpen ? 
          { x1: 4, y1: 20, x2: 20, y2: 4 } : 
          { x1: 4, y1: 18, x2: 20, y2: 18 }
        }
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
};

export default Navbar;