import React from "react";
import HeroSection from "@/components/layout/hero-section";
import ComponentCard from "@/components/component-card";
import { Button } from "@/components/ui-library/button";
import { Alert } from "@/components/ui-library/alert";
import { Toggle } from "@/components/ui-library/toggle";
import { Progress } from "@/components/ui-library/progress";
import { Input } from "@/components/ui-library/input";
import { Link } from "wouter";
import { Check, AlertCircle, Search, Info } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="border-b border-border pb-5 mb-8">
            <h2 className="text-3xl font-bold">Featured Components</h2>
            <p className="mt-2 text-muted-foreground max-w-4xl">
              Explore a selection of our most popular components designed for flexibility and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Buttons */}
            <ComponentCard title="Buttons">
              <Button variant="primary" className="w-full">Primary Button</Button>
              <Button variant="secondary" className="w-full">Secondary Button</Button>
              <Button variant="outline" className="w-full">Outline Button</Button>
              <Button variant="success" className="w-full" icon={<Check className="h-4 w-4" />}>
                Success Button
              </Button>
              <Button variant="ghost" className="w-full" disabled>
                Disabled Button
              </Button>
            </ComponentCard>

            {/* Alerts */}
            <ComponentCard title="Alerts">
              <Alert 
                variant="success" 
                icon={<Check className="h-4 w-4" />}
                title="Success! Your changes have been saved."
                onClose={() => {}}
              />
              <Alert 
                variant="warning" 
                icon={<AlertCircle className="h-4 w-4" />}
                title="Warning! This action cannot be undone."
                onClose={() => {}}
              />
              <Alert 
                variant="error" 
                icon={<AlertCircle className="h-4 w-4" />}
                title="Error! Please fix the errors and try again."
                onClose={() => {}}
              />
              <Alert 
                variant="default" 
                icon={<Info className="h-4 w-4" />}
                title="Info: A new update is available for your application."
                onClose={() => {}}
              />
            </ComponentCard>

            {/* Toggles & Inputs */}
            <ComponentCard title="Inputs & Toggles">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Toggle Switch</span>
                <Toggle />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Toggle</span>
                <Toggle defaultChecked />
              </div>
              <Input placeholder="Text Input" />
              <Input
                placeholder="Search..."
                icon={<Search className="h-4 w-4" />}
              />
              <Progress value={75} showValue label="Progress" />
            </ComponentCard>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="mx-auto"
              onClick={() => window.location.href = "/components"}
            >
              View All Components
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
