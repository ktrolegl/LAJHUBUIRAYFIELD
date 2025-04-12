import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui-library/button";

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Modern UI Component Library",
  description = "A clean, minimal, and accessible component library for building beautiful interfaces.",
  primaryButtonText = "View Components",
  primaryButtonLink = "/components",
  secondaryButtonText = "Documentation",
  secondaryButtonLink = "/documentation",
}) => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary dark:from-primary/90 dark:to-secondary/90">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-50">
          {description}
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white hover:bg-white/90 text-neutral-800 border-transparent"
            onClick={() => window.location.href = primaryButtonLink}
          >
            {primaryButtonText}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white bg-primary-800 bg-opacity-30 hover:bg-opacity-40 border-transparent"
            onClick={() => window.location.href = secondaryButtonLink}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
