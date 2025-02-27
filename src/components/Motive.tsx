import React from "react";
import { Button } from "./ui/button";
import { BookOpen, MessageCircle, Users } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { GithubOrgLink, TelegramGroupLink } from "@/lib/config";

const Motive = () => {
  return (
    <MaxWidthWrapper className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
      <div className="rounded-lg bg-secondary p-6">
        <MessageCircle className="mb-4 h-14 w-14 text-accent" />
        <h2 className="mb-3 text-2xl font-semibold text-foreground lg:text-3xl">
          Discussions
        </h2>
        <p className="mb-4 text-sm text-foreground/70">
          Engage in meaningful conversations with other Muslim developers.
        </p>
        <Button
          variant="outline"
          className="text-xs text-foreground/90"
          asChild
        >
          <Link href={TelegramGroupLink}>Join Discussions</Link>
        </Button>
      </div>
      <div className="rounded-lg bg-secondary p-6">
        <BookOpen className="mb-4 h-14 w-14 text-accent" />
        <h2 className="mb-3 text-2xl font-semibold text-foreground lg:text-3xl">
          Resources
        </h2>
        <p className="mb-4 text-sm text-foreground/70">
          Access curated learning materials and development resources.
        </p>
        <Button variant="outline" className="text-xs text-foreground/90">
          Explore Resources
        </Button>
      </div>
      <div className="rounded-lg bg-secondary p-6">
        <Users className="mb-4 h-14 w-14 text-accent" />
        <h2 className="mb-3 text-2xl font-semibold text-foreground lg:text-3xl">
          Community
        </h2>
        <p className="mb-4 text-sm text-foreground/70">
          Contribute to open-source projects and collaborate with peers.
        </p>
        <Button variant="outline" className="text-xs text-foreground/90" asChild>
          <Link href={`${GithubOrgLink}?tab=repositories`}>Get Involved</Link>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Motive;
