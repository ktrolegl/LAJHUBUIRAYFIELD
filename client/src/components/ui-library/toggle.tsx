import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva(
  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:ring-primary",
        success: "focus:ring-success",
        warning: "focus:ring-warning",
        error: "focus:ring-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const toggleSizes = {
  sm: {
    container: "h-5 w-9",
    circle: "h-4 w-4",
    translateX: "translate-x-4"
  },
  md: {
    container: "h-6 w-11",
    circle: "h-5 w-5",
    translateX: "translate-x-5"
  },
  lg: {
    container: "h-7 w-12",
    circle: "h-6 w-6",
    translateX: "translate-x-5"
  }
};

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, checked, defaultChecked, onCheckedChange, disabled, size = "md", ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    
    const handleCheckedState = checked !== undefined ? checked : isChecked;
    
    const handleChange = () => {
      if (disabled) return;
      
      const newValue = !handleCheckedState;
      setIsChecked(newValue);
      onCheckedChange?.(newValue);
    };

    const sizeStyles = toggleSizes[size];
    
    return (
      <button
        type="button"
        role="switch"
        aria-checked={handleCheckedState}
        disabled={disabled}
        className={cn(
          toggleVariants({ variant }),
          handleCheckedState ? "bg-primary" : "bg-muted",
          sizeStyles.container,
          className
        )}
        onClick={handleChange}
        ref={ref}
        {...props}
      >
        <span 
          className={cn(
            "pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            sizeStyles.circle,
            handleCheckedState ? sizeStyles.translateX : "translate-x-0"
          )}
        >
          <span 
            className={cn(
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
              handleCheckedState ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
