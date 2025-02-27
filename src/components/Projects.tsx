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
      return <Monitor className="h-4 w-4 mr-2" />;
    if (lowerOS.includes("mac")) return <Apple className="h-4 w-4 mr-2" />;
    if (
      lowerOS.includes("linux") ||
      lowerOS.includes("rpm") ||
      lowerOS.includes("deb")
    )
      return <Linux className="h-4 w-4 mr-2" />;
    return <Download className="h-4 w-4 mr-2" />;
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        {downloadLinks && downloadLinks.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="downloads">
              <AccordionTrigger className="text-sm py-2">
                Releases
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  {downloadLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        target="_blank"
                        href={link.url}
                        className="text-accent hover:underline text-sm flex items-center"
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
        {projectUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" href={projectUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        )}
        <Button variant="outline" size="sm" asChild>
          <Link target="_blank" href={sourceCodeUrl}>
            <Github className="mr-2 h-4 w-4" />
            Source
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
