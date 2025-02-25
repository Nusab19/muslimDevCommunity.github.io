import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="border-t border-secondary">
      <MaxWidthWrapper className="px-4 py-8 flex justify-between items-center">
        <div className="text-foreground/60">
          &copy; <code>2022 - {new Date().getFullYear()}</code>
          <span className="font-semibold mx-2 tracking-wide">
            Muslim Developers Community
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
