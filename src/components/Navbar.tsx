import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

import { TelegramChannelLink, GithubOrgLink } from "@/lib/config";

const LINKS = {
  Telegram: TelegramChannelLink,
  Github: GithubOrgLink,
};

const Navbar = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="images/logo.jpeg"
          alt="Muslim Developers Community"
          width={45}
          height={45}
          className="rounded-md"
        />
        <span className="text-2xl font-bold tracking-tighter text-[#f7b652]">
          MDC
        </span>
      </div>
      <div className="hidden space-x-2 md:block">
        {Object.entries(LINKS).map(([name, url]) => (
          <Button
            key={name}
            variant="ghost"
            className="text-foreground/90"
            asChild
          >
            <Link href={url} target="_blank">
              {name}
            </Link>
          </Button>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
