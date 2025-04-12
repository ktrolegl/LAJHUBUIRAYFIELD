import React, { useState } from 'react';
import { Link } from 'wouter';

// Import UI components
import { Button } from '../components/ui-library/button';
import { Input } from '../components/ui-library/input';
import { Toggle } from '../components/ui-library/toggle';
import { Slider } from '../components/ui-library/slider';
import { Alert } from '../components/ui-library/alert';
import { Modal } from '../components/ui-library/modal';
import { Progress, CircularProgress } from '../components/ui-library/progress';

export default function Showcase() {
  // State for interactive components
  const [inputValue, setInputValue] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<'default' | 'success' | 'warning' | 'error'>('default');
  
  // Handle showing different alert types
  const displayAlert = (variant: 'default' | 'success' | 'warning' | 'error') => {
    setAlertVariant(variant);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">UI Component Showcase</h1>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>

      {/* Alert Display */}
      {showAlert && (
        <div className="mb-8">
          <Alert
            variant={alertVariant}
            title={`${alertVariant.charAt(0).toUpperCase() + alertVariant.slice(1)} Alert`}
            description={`This is an example of a ${alertVariant} alert message.`}
            onClose={() => setShowAlert(false)}
          />
        </div>
      )}

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Standard Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">States</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button iconPosition="left" icon={<span>🔍</span>}>With Icon</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Standard Input</h3>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something here..."
              className="mb-3"
            />
            <p className="text-sm text-gray-500">Current value: {inputValue || '[empty]'}</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Input with Icon</h3>
            <Input
              placeholder="Search..."
              icon={<span>🔍</span>}
              iconPosition="left"
            />
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Input with Error</h3>
            <Input
              placeholder="Email"
              error="Please enter a valid email address"
            />
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Disabled Input</h3>
            <Input
              placeholder="This input is disabled"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toggles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Standard Toggle</h3>
            <div className="flex items-center">
              <Toggle
                checked={isToggled}
                onCheckedChange={setIsToggled}
              />
              <span className="ml-2">
                {isToggled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Sizes</h3>
            <div className="flex items-center gap-4">
              <Toggle size="sm" />
              <Toggle size="md" />
              <Toggle size="lg" />
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Disabled</h3>
            <Toggle disabled />
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sliders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Standard Slider</h3>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              min={0}
              max={100}
              step={1}
            />
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Slider with Value</h3>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              min={0}
              max={100}
              step={1}
              showValue
            />
            <p className="text-sm text-gray-500 mt-2">Value: {sliderValue[0]}</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Custom Color</h3>
            <Slider
              value={[75]}
              variant="success"
              showValue
            />
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Disabled</h3>
            <Slider
              value={[25]}
              disabled
            />
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Progress Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Linear Progress</h3>
            <Progress value={65} showValue />
            <div className="mt-4">
              <Progress value={40} variant="success" />
            </div>
            <div className="mt-4">
              <Progress value={80} variant="warning" />
            </div>
            <div className="mt-4">
              <Progress value={25} variant="error" />
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Circular Progress</h3>
            <div className="flex flex-wrap gap-6">
              <CircularProgress value={65} size={60} thickness={4} />
              <CircularProgress value={40} size={60} thickness={4} variant="success" />
              <CircularProgress value={80} size={60} thickness={4} variant="warning" />
              <CircularProgress value={25} size={60} thickness={4} variant="error" />
              <CircularProgress value={undefined} size={60} thickness={4} /> {/* Indeterminate */}
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Alert Variants</h3>
            <div className="space-y-4">
              <Button onClick={() => displayAlert('default')}>Show Default Alert</Button>
              <Button onClick={() => displayAlert('success')} variant="success">Show Success Alert</Button>
              <Button onClick={() => displayAlert('warning')} variant="warning">Show Warning Alert</Button>
              <Button onClick={() => displayAlert('error')} variant="error">Show Error Alert</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Modal Dialog</h2>
        <div className="p-4 border rounded-lg">
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
            description="This is a sample modal dialog component."
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            onConfirm={() => {
              alert('Modal confirmed!');
              setIsModalOpen(false);
            }}
          >
            <div className="py-4">
              <p>This is the content area of the modal.</p>
              <p className="mt-2">You can add any components or content here.</p>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  );
}