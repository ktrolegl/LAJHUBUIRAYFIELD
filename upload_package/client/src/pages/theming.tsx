import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui-library/button";
import { Input } from "@/components/ui-library/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Theming: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState("default");

  const themePreviewData = {
    default: {
      colors: [
        { color: "bg-primary", name: "primary" },
        { color: "bg-secondary", name: "secondary" },
        { color: "bg-success", name: "success" },
        { color: "bg-warning", name: "warning" },
        { color: "bg-destructive", name: "error" },
      ],
      buttonClass: "bg-primary hover:bg-primary/90 text-white",
      inputClass: "focus:ring-primary",
    },
    ocean: {
      colors: [
        { color: "bg-blue-500", name: "blue" },
        { color: "bg-cyan-500", name: "cyan" },
        { color: "bg-teal-500", name: "teal" },
        { color: "bg-sky-500", name: "sky" },
        { color: "bg-indigo-500", name: "indigo" },
      ],
      buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
      inputClass: "focus:ring-blue-500",
    },
    forest: {
      colors: [
        { color: "bg-green-500", name: "green" },
        { color: "bg-emerald-500", name: "emerald" },
        { color: "bg-lime-500", name: "lime" },
        { color: "bg-teal-500", name: "teal" },
        { color: "bg-amber-500", name: "amber" },
      ],
      buttonClass: "bg-green-600 hover:bg-green-700 text-white",
      inputClass: "focus:ring-green-500",
    },
    sunset: {
      colors: [
        { color: "bg-orange-500", name: "orange" },
        { color: "bg-amber-500", name: "amber" },
        { color: "bg-red-500", name: "red" },
        { color: "bg-rose-500", name: "rose" },
        { color: "bg-pink-500", name: "pink" },
      ],
      buttonClass: "bg-orange-600 hover:bg-orange-700 text-white",
      inputClass: "focus:ring-orange-500",
    },
  };

  const currentTheme = themePreviewData[selectedTheme as keyof typeof themePreviewData];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section id="theming" className="mb-16">
        <div className="border-b border-border pb-5 mb-8">
          <h2 className="text-3xl font-bold">Theming</h2>
          <p className="mt-2 text-muted-foreground max-w-4xl">
            Customize the appearance of your components with themes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme Configuration */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Theme Configuration</h3>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p>The theme system allows you to customize:</p>
                <ul>
                  <li>Color palette</li>
                  <li>Typography (font family, sizes, weights)</li>
                  <li>Border radius</li>
                  <li>Spacing</li>
                  <li>Shadows</li>
                  <li>Dark mode</li>
                </ul>
                
                <h4 className="mt-6">Default Theme Structure</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`const defaultTheme = {
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      500: '#3B82F6',
      600: '#2563EB',
      // ...other shades
    },
    // ...other color categories
  },
  typography: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      // ...other font families
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      // ...other sizes
    },
    // ...other typography settings
  },
  spacing: {
    // ...spacing scale
  },
  borderRadius: {
    // ...radius scale
  },
  // ...other theme properties
};`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          
          {/* Theme Previews */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Theme Previews</h3>
              
              {/* Theme Selector */}
              <div className="mb-6">
                <Label htmlFor="theme-selector" className="block mb-2">
                  Select Theme Preview
                </Label>
                <Select defaultValue="default" onValueChange={setSelectedTheme}>
                  <SelectTrigger id="theme-selector">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Theme</SelectItem>
                    <SelectItem value="ocean">Ocean Theme</SelectItem>
                    <SelectItem value="forest">Forest Theme</SelectItem>
                    <SelectItem value="sunset">Sunset Theme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Theme Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg shadow border border-border p-4">
                  <h4 className="font-medium mb-3">{selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}</h4>
                  
                  <div className="space-y-3">
                    {/* Color Swatches */}
                    <div className="flex space-x-2">
                      {currentTheme.colors.map((color, index) => (
                        <div key={index} className={`h-6 w-6 rounded-full ${color.color}`} title={color.name}></div>
                      ))}
                    </div>
                    
                    {/* Button Example */}
                    <button className={`${currentTheme.buttonClass} font-medium py-1 px-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}>
                      Button
                    </button>
                    
                    {/* Input Example */}
                    <input 
                      type="text" 
                      className={`w-full px-2 py-1 text-sm border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 ${currentTheme.inputClass} focus:border-input bg-background`}
                      placeholder="Input field"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Theming;
