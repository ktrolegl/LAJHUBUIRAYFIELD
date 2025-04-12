// Export all UI components from this file
import { Button, buttonVariants, type ButtonProps } from './button';
import { Input, type InputProps } from './input';
import { Toggle, type ToggleProps } from './toggle';
import { Slider, type SliderProps } from './slider';
import { Progress, CircularProgress, type ProgressProps, type CircularProgressProps } from './progress';
import { Alert, alertVariants, type AlertProps } from './alert';
import { Modal, type ModalProps } from './modal';
import { UIThemeProvider, useUITheme } from './theme-provider';

// Export components
export {
  // Components
  Button,
  Input,
  Toggle,
  Slider,
  Progress,
  CircularProgress,
  Alert,
  Modal,
  
  // Theme Provider
  UIThemeProvider,
  useUITheme,
  
  // Variants
  buttonVariants,
  alertVariants,
  
  // Types
  type ButtonProps,
  type InputProps,
  type ToggleProps,
  type SliderProps,
  type ProgressProps,
  type CircularProgressProps,
  type AlertProps,
  type ModalProps
};
