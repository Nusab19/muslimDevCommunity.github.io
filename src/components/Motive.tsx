import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MessageCircle, Users } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { GithubOrgLink, TelegramGroupLink } from "@/lib/config";
import Header from "./sub/Header";

const Motive = () => {
  return (
    <MaxWidthWrapper className="px-4 py-16">
      <Header lineWidth="w-1/3">Join Us</Header>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="border-0 bg-[#181d27]/70">
          <CardHeader className="pb-2">
            <MessageCircle className="mb-4 h-14 w-14 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground lg:text-3xl">
              Discussions
            </h2>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-foreground/70">
              Engage in meaningful conversations with other Muslim developers.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="text-xs text-foreground/90"
              asChild
            >
              <Link href={TelegramGroupLink}>Join Discussions</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-0 bg-[#181d27]/70">
          <CardHeader className="pb-2">
            <Users className="mb-4 h-14 w-14 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground lg:text-3xl">
              Community
            </h2>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-foreground/70">
              Contribute to open-source projects and collaborate with peers.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="text-xs text-foreground/90"
              asChild
            >
              <Link href={`${GithubOrgLink}?tab=repositories`}>
                Get Involved
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default Motive;
