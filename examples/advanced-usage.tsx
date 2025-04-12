import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Alert, 
  Progress, 
  CircularProgress,
  ThemeProvider,
  useUITheme
} from 'modern-react-ui';

// Customized theme provider
function CustomThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      theme={{
        colors: {
          primary: '#6d28d9', // Purple as primary color
          secondary: '#2563eb',
          success: '#059669',
          warning: '#d97706',
          error: '#dc2626',
        },
        borderRadius: '0.5rem',
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      {children}
    </ThemeProvider>
  );
}

// Custom button component built with the library
function CustomActionButton({ 
  children, 
  onClick,
  loading = false,
  success = false,
  error = false
}: { 
  children: React.ReactNode, 
  onClick: () => void,
  loading?: boolean,
  success?: boolean,
  error?: boolean
}) {
  let variant = 'default';
  if (success) variant = 'success';
  if (error) variant = 'error';
  
  return (
    <Button 
      variant={variant as any} 
      onClick={onClick}
      disabled={loading}
      className="relative min-w-[120px] flex items-center justify-center"
    >
      {loading && (
        <span className="absolute left-3">
          <CircularProgress size={16} thickness={2} value={undefined} />
        </span>
      )}
      {children}
    </Button>
  );
}

// Advanced dashboard example
function AdvancedExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | 'warning'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  // Simulate an API call
  const handleAction = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setProgress(0);
    
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newValue = prev + 10;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 300);
    
    // Simulate API call completion
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      
      // Randomly succeed or fail for demo purposes
      const success = Math.random() > 0.3;
      if (success) {
        setIsSuccess(true);
        showAlertMessage('success', 'Operation completed successfully!');
      } else {
        setIsError(true);
        showAlertMessage('error', 'An error occurred during the operation.');
      }
      
      setIsLoading(false);
    }, 3000);
  };
  
  const showAlertMessage = (type: 'success' | 'error' | 'warning', message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    
    // Auto-hide alert after 4 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };
  
  const handleWarningExample = () => {
    showAlertMessage('warning', 'This is a warning message example.');
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
        Advanced UI Components
      </h1>
      
      {/* Alert notifications */}
      {showAlert && (
        <div className="mb-6">
          <Alert
            variant={alertType}
            title={alertType.charAt(0).toUpperCase() + alertType.slice(1)}
            description={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        </div>
      )}
      
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left panel */}
        <div className="space-y-6 bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Progress Tracking</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Linear Progress</label>
              <Progress value={progress} showValue animated variant={isError ? 'error' : 'default'} />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">Circular Progress</label>
              <div className="flex space-x-4">
                <CircularProgress value={progress} size={60} thickness={4} />
                <CircularProgress value={undefined} size={60} thickness={4} variant="success" />
                <CircularProgress value={75} size={60} thickness={4} variant="warning" />
              </div>
            </div>
          </div>
          
          <div className="pt-4 space-y-3">
            <CustomActionButton
              onClick={handleAction}
              loading={isLoading}
              success={isSuccess}
              error={isError}
            >
              {isLoading ? 'Processing...' : isSuccess ? 'Success!' : isError ? 'Failed' : 'Start Process'}
            </CustomActionButton>
            
            <Button variant="outline" onClick={handleWarningExample}>
              Show Warning
            </Button>
          </div>
        </div>
        
        {/* Right panel */}
        <div className="space-y-6 bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Custom Form Elements</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Styled Input</label>
              <Input
                placeholder="Search anything..."
                icon={<span className="text-muted-foreground">🔍</span>}
                iconPosition="left"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-4">
              {['primary', 'secondary', 'success', 'warning', 'error'].map((variant) => (
                <Button
                  key={variant}
                  variant={variant as any}
                  className="text-sm"
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-lg font-medium mb-3">Gradient Effect</h3>
            <Button
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white border-0"
            >
              Gradient Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap with custom theme provider
export default function App() {
  return (
    <CustomThemeWrapper>
      <AdvancedExample />
    </CustomThemeWrapper>
  );
}