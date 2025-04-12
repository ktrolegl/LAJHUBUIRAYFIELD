import React, { useState } from "react";
import ComponentCard from "@/components/component-card";
import { Button } from "@/components/ui-library/button";
import { Input } from "@/components/ui-library/input";
import { Toggle } from "@/components/ui-library/toggle";
import { Slider } from "@/components/ui-library/slider";
import { Progress, CircularProgress } from "@/components/ui-library/progress";
import { Alert } from "@/components/ui-library/alert";
import { Modal } from "@/components/ui-library/modal";
import { Check, X, AlertCircle, Info, Search, HelpCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Components: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section id="components" className="mb-16">
        <div className="border-b border-border pb-5 mb-8">
          <h2 className="text-3xl font-bold">Components</h2>
          <p className="mt-2 text-muted-foreground max-w-4xl">
            Explore our collection of UI components designed for flexibility and ease of use.
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
            <Button variant="error" className="w-full" disabled>
              Disabled Button
            </Button>
          </ComponentCard>

          {/* Inputs */}
          <ComponentCard title="Inputs">
            <div>
              <Label htmlFor="text-input">Text Input</Label>
              <Input 
                id="text-input"
                placeholder="Enter text..." 
              />
            </div>
            
            <div>
              <Label htmlFor="search-input">Search Input</Label>
              <Input 
                id="search-input"
                placeholder="Search..." 
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            
            <div>
              <Label htmlFor="textarea">Textarea</Label>
              <textarea 
                id="textarea" 
                rows={2} 
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background"
                placeholder="Enter longer text..."
              ></textarea>
            </div>
            
            <div>
              <Label htmlFor="error-input" className="text-destructive">Error Input</Label>
              <Input 
                id="error-input"
                placeholder="Invalid input..." 
                variant="error"
                error="This field is required"
              />
            </div>
          </ComponentCard>

          {/* Toggle & Switches */}
          <ComponentCard title="Toggles & Switches">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Toggle Switch</span>
              <Toggle />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Toggle</span>
              <Toggle defaultChecked />
            </div>
            
            <div className="flex items-center">
              <Checkbox id="checkbox" />
              <Label htmlFor="checkbox" className="ml-2">
                Checkbox
              </Label>
            </div>
            
            <div>
              <div className="text-sm font-medium mb-2">Radio Group</div>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" />
                    <Label htmlFor="option-1">Option 1</Label>
                  </div>
                </div>
                <div className="flex items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-2" id="option-2" />
                    <Label htmlFor="option-2">Option 2</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </ComponentCard>

          {/* Alerts & Notifications */}
          <ComponentCard title="Alerts & Notifications">
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
              icon={<X className="h-4 w-4" />}
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

          {/* Modal & Dialog */}
          <ComponentCard title="Modal & Dialog">
            <Button
              className="w-full"
              onClick={() => setModalOpen(true)}
            >
              Open Dialog Modal
            </Button>
            
            <div className="relative bg-card rounded-lg shadow-lg border border-border p-5 mt-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 sm:mx-0 sm:h-10 sm:w-10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium">
                    Modal Title
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      This is a sample modal dialog. In an actual implementation, this would appear as an overlay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <Button variant="primary" size="sm" className="sm:ml-3">
                  Confirm
                </Button>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Modal Dialog"
              description="This is an example modal dialog. You can use it for confirmations, alerts, or any other content that requires user attention."
              icon={<HelpCircle className="h-6 w-6" />}
              onConfirm={() => setModalOpen(false)}
            />
          </ComponentCard>

          {/* Slider & Progress */}
          <ComponentCard title="Slider & Progress">
            <div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                showValue
              />
            </div>
            
            <div>
              <Progress 
                value={75} 
                showValue 
                label="Progress Bar (75%)" 
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-2">
                Loading Indicator
              </Label>
              <Progress 
                value={75} 
                animated
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-2">
                Circular Progress
              </Label>
              <div className="flex items-center justify-center">
                <CircularProgress value={75} size={64} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </section>
    </main>
  );
};

export default Components;
