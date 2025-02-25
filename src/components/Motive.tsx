import React from "react";
import { Button } from "./ui/button";
import { BookOpen, MessageCircle, Users } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Motive = () => {
  return (
    <MaxWidthWrapper className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-secondary p-6 rounded-lg">
        <MessageCircle className="w-14 h-14 mb-4 text-accent" />
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground">
          Discussions
        </h2>
        <p className="text-sm mb-4 text-foreground/70">
          Engage in meaningful conversations with other Muslim developers.
        </p>
        <Button variant="outline" className="text-foreground/90 text-xs">
          Join Discussions
        </Button>
      </div>
      <div className="bg-secondary p-6 rounded-lg">
        <BookOpen className="w-14 h-14 mb-4 text-accent" />
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground">
          Resources
        </h2>
        <p className="text-sm mb-4 text-foreground/70">
          Access curated learning materials and development resources.
        </p>
        <Button variant="outline" className="text-foreground/90 text-xs">
          Explore Resources
        </Button>
      </div>
      <div className="bg-secondary p-6 rounded-lg">
        <Users className="w-14 h-14 mb-4 text-accent" />
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground">
          Community
        </h2>
        <p className="text-sm mb-4 text-foreground/70">
          Contribute to open-source projects and collaborate with peers.
        </p>
        <Button variant="outline" className="text-foreground/90 text-xs">
          Get Involved
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Motive;
