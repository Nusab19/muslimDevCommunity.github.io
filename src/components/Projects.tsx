import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Github,
  ExternalLink,
  Download,
  Monitor,
  Apple,
  LaptopIcon as Linux,
} from "lucide-react";

import projects from "./../../public/assets/projects.json";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Header from "./sub/Header";

interface DownloadLink {
  url: string;
  os: string;
}

interface ProjectProps {
  name: string;
  description: string;
  downloadLinks?: DownloadLink[];
  projectUrl?: string | null;
  sourceCodeUrl: string;
}

export function ProjectCard({
  name,
  description,
  downloadLinks,
  projectUrl,
  sourceCodeUrl,
}: ProjectProps) {
  const getOSIcon = (os: string) => {
    const lowerOS = os.toLowerCase();
    if (lowerOS.includes("windows"))
      return <Monitor className="mr-2 h-4 w-4" />;
    if (lowerOS.includes("mac")) return <Apple className="mr-2 h-4 w-4" />;
    if (
      lowerOS.includes("linux") ||
      lowerOS.includes("rpm") ||
      lowerOS.includes("deb")
    )
      return <Linux className="mr-2 h-4 w-4" />;
    return <Download className="mr-2 h-4 w-4" />;
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        {downloadLinks && downloadLinks.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="downloads">
              <AccordionTrigger className="py-2 text-sm">
                Releases
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  {downloadLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        target="_blank"
                        href={link.url}
                        className="flex items-center text-sm text-accent hover:underline"
                      >
                        {getOSIcon(link.os)}
                        {link.os}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" asChild>
          <Link target="_blank" href={sourceCodeUrl}>
            <Github className="mr-2 h-4 w-4" />
            Source
          </Link>
        </Button>
        {projectUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" href={projectUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

const Projects = () => {
  return (
    <MaxWidthWrapper className="mx-auto px-4 py-16">
      <Header>Our Projects</Header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
