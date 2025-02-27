import MaxWidthWrapper from "./MaxWidthWrapper";
import { Github, Twitter, Linkedin} from "lucide-react";
import Link from "next/link";
import Clock from "./sub/Clock";

const Footer = () => {
  return (
    <footer className="border-t border-secondary bg-secondary/50 py-8">
      <MaxWidthWrapper className="px-4 py-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold tracking-wide">
              Muslim Developers Community
            </span>

            <p className="text-center text-sm text-muted-foreground md:text-left">
              Building technology with faith and purpose
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 flex space-x-4">
              <Link
                href="https://github.com"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            {/* <div className="flex items-center text-sm text-muted-foreground">
              <Code className="mr-2 h-4 w-4" />
              <Link
                href="/projects"
                className="transition-colors hover:text-primary"
              >
                Our Projects
              </Link>
            </div> */}
            <Clock size={70}/>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 border-t border-secondary pt-4 text-center text-sm text-foreground/60">
          &copy;{" "}
          <code>
            {2022} - {new Date().getFullYear()}
          </code>{" "}
          Muslim Developers Community. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
