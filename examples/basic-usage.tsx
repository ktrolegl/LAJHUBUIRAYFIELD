import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Toggle, 
  Slider, 
  Alert, 
  Modal, 
  ThemeProvider,
  useUITheme
} from 'modern-react-ui';

// Example component showing how to use the UI library
function ExampleApp() {
  // State for form components
  const [inputValue, setInputValue] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Alert state
  const [showAlert, setShowAlert] = useState(false);
  
  // Access theme and theme functions (for customization)
  const { theme, updateTheme } = useUITheme();
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { inputValue, isToggled, sliderValue });
    setShowAlert(true);
    
    // Auto-hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };
  
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">UI Library Example</h1>
      
      {/* Alert example */}
      {showAlert && (
        <Alert
          variant="success"
          title="Success!"
          description="Your form has been submitted successfully."
          onClose={() => setShowAlert(false)}
        />
      )}
      
      {/* Form example */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-6">
        <div>
          <label className="block mb-2 font-medium">Input Example</label>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Toggle Example</label>
          <Toggle
            checked={isToggled}
            onCheckedChange={setIsToggled}
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Slider Example</label>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            min={0}
            max={100}
            step={1}
            showValue
          />
        </div>
        
        <Button type="submit" variant="default">
          Submit Form
        </Button>
      </form>
      
      {/* Modal example */}
      <div className="mt-6">
        <Button 
          variant="outline" 
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
          description="This is a modal dialog from the UI Library."
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          onConfirm={() => {
            console.log('Modal confirmed');
            setIsModalOpen(false);
          }}
        >
          <div className="py-4">
            <p>Modal content goes here. You can add any components inside.</p>
          </div>
        </Modal>
      </div>
      
      {/* Theme customization example */}
      <div className="mt-8 p-4 border rounded-md">
        <h2 className="text-xl font-semibold mb-4">Theme Customization</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => updateTheme({ 
              colors: { ...theme.colors, primary: '#3b82f6' } 
            })}
          >
            Blue Theme
          </Button>
          
          <Button
            onClick={() => updateTheme({ 
              colors: { ...theme.colors, primary: '#10b981' } 
            })}
          >
            Green Theme
          </Button>
          
          <Button
            onClick={() => updateTheme({ 
              colors: { ...theme.colors, primary: '#ef4444' } 
            })}
          >
            Red Theme
          </Button>
          
          <Button
            onClick={() => updateTheme({ 
              colors: { ...theme.colors, primary: '#f59e0b' } 
            })}
          >
            Orange Theme
          </Button>
        </div>
      </div>
    </div>
  );
}

// Wrap your application with the ThemeProvider
export default function App() {
  return (
    <ThemeProvider>
      <ExampleApp />
    </ThemeProvider>
  );
}