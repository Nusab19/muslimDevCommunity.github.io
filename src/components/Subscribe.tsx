import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Subscribe = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
        Stay Connected
      </h2>
      <div className="max-w-md mx-auto flex">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-grow text-foreground/90"
        />
        <Button className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Subscribe;
