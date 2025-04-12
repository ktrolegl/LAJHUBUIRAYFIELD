import React from "react";
import { Card } from "@/components/ui/card";

const Documentation: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section id="documentation" className="mb-16">
        <div className="border-b border-border pb-5 mb-8">
          <h2 className="text-3xl font-bold">Documentation</h2>
          <p className="mt-2 text-muted-foreground max-w-4xl">
            How to use the component library in your projects.
          </p>
        </div>
        
        <Card className="p-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h3>Installation</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>npm install ui-library</code>
            </pre>
            
            <h3 className="mt-8">Basic Usage</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`import { Button, Input, Toggle } from 'ui-library';

// Use components in your application
function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Input placeholder="Enter text..." />
      <Toggle isOn={true} onChange={handleToggle} />
    </div>
  );
}`}</code>
            </pre>
            
            <h3 className="mt-8">Theming</h3>
            <p>The library supports custom themes through a simple theme provider:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`import { UIThemeProvider } from 'ui-library';

// Define your custom theme
const myTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  // Other theme properties...
};

// Wrap your app with the ThemeProvider
function App() {
  return (
    <UIThemeProvider theme={myTheme}>
      {/* Your app components */}
    </UIThemeProvider>
  );
}`}</code>
            </pre>
            
            <h3 className="mt-8">Component Props</h3>
            <p>Each component accepts a set of props that control its appearance and behavior:</p>
            
            <h4 className="mt-4">Button</h4>
            <ul>
              <li><code>variant</code>: "primary" | "secondary" | "outline" | "success" | "warning" | "error" | "ghost" | "link"</li>
              <li><code>size</code>: "sm" | "md" | "lg" | "icon"</li>
              <li><code>disabled</code>: boolean</li>
              <li><code>icon</code>: React.ReactNode</li>
              <li><code>iconPosition</code>: "left" | "right"</li>
              <li><code>fullWidth</code>: boolean</li>
              <li><code>onClick</code>: {'() => void'}</li>
            </ul>
            
            <h4 className="mt-4">Input</h4>
            <ul>
              <li><code>type</code>: "text" | "password" | "email" | "number" | etc.</li>
              <li><code>placeholder</code>: string</li>
              <li><code>value</code>: string</li>
              <li><code>onChange</code>: {'(e: ChangeEvent) => void'}</li>
              <li><code>error</code>: string</li>
              <li><code>icon</code>: React.ReactNode</li>
              <li><code>iconPosition</code>: "left" | "right"</li>
              <li><code>variant</code>: "default" | "error"</li>
            </ul>
            
            <h4 className="mt-4">Toggle</h4>
            <ul>
              <li><code>checked</code>: boolean</li>
              <li><code>defaultChecked</code>: boolean</li>
              <li><code>onCheckedChange</code>: {'(value: boolean) => void'}</li>
              <li><code>disabled</code>: boolean</li>
              <li><code>size</code>: "sm" | "md" | "lg"</li>
              <li><code>variant</code>: "default" | "success" | "warning" | "error"</li>
            </ul>
            
            <h4 className="mt-4">Slider</h4>
            <ul>
              <li><code>min</code>: number</li>
              <li><code>max</code>: number</li>
              <li><code>step</code>: number</li>
              <li><code>value</code>: number[]</li>
              <li><code>defaultValue</code>: number[]</li>
              <li><code>onValueChange</code>: {'(value: number[]) => void'}</li>
              <li><code>variant</code>: "default" | "success" | "warning" | "error"</li>
              <li><code>showValue</code>: boolean</li>
              <li><code>formatValue</code>: {'(value: number) => string'}</li>
            </ul>
            
            <h4 className="mt-4">Progress</h4>
            <ul>
              <li><code>value</code>: number</li>
              <li><code>variant</code>: "default" | "success" | "warning" | "error"</li>
              <li><code>size</code>: "sm" | "md" | "lg"</li>
              <li><code>showValue</code>: boolean</li>
              <li><code>label</code>: string</li>
              <li><code>animated</code>: boolean</li>
            </ul>
            
            <h4 className="mt-4">Alert</h4>
            <ul>
              <li><code>variant</code>: "default" | "success" | "warning" | "error"</li>
              <li><code>title</code>: string</li>
              <li><code>description</code>: string</li>
              <li><code>icon</code>: React.ReactNode</li>
              <li><code>onClose</code>: {'() => void'}</li>
            </ul>
            
            <h4 className="mt-4">Modal</h4>
            <ul>
              <li><code>isOpen</code>: boolean</li>
              <li><code>onClose</code>: {'() => void'}</li>
              <li><code>title</code>: string</li>
              <li><code>description</code>: string</li>
              <li><code>children</code>: React.ReactNode</li>
              <li><code>footer</code>: React.ReactNode</li>
              <li><code>icon</code>: React.ReactNode</li>
              <li><code>confirmLabel</code>: string</li>
              <li><code>cancelLabel</code>: string</li>
              <li><code>onConfirm</code>: {'() => void'}</li>
              <li><code>variant</code>: "default" | "success" | "warning" | "error"</li>
              <li><code>size</code>: "sm" | "md" | "lg" | "xl" | "full"</li>
            </ul>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Documentation;
