import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-muted",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        warning: "",
        error: ""
      },
      size: {
        sm: "h-1",
        md: "h-2.5",
        lg: "h-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

const indicatorVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-destructive"
      },
      animated: {
        true: "animate-progress",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      animated: false
    }
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  showValue?: boolean;
  label?: string;
  animated?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, size, showValue, label, animated, ...props }, ref) => {
  const displayValue = value || 0;
  
  return (
    <div className="w-full">
      {(showValue || label) && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-foreground">{label || "Progress"}</span>
          {showValue && <span className="text-sm font-medium text-foreground">{displayValue}%</span>}
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ variant, size }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(indicatorVariants({ variant, animated }))}
          style={{ width: animated ? "75%" : `${displayValue}%` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export interface CircularProgressProps extends VariantProps<typeof indicatorVariants> {
  value?: number;
  size?: number;
  thickness?: number;
  showValue?: boolean;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  size = 36,
  thickness = 3,
  showValue = true,
  variant = "default",
  className,
}) => {
  const radius = size / 2 - thickness;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg className="rotate-[-90deg]" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-muted stroke-current"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
          fill="none"
        />
        <circle
          className={cn(
            {
              "text-primary stroke-current": variant === "default",
              "text-success stroke-current": variant === "success",
              "text-warning stroke-current": variant === "warning",
              "text-destructive stroke-current": variant === "error"
            }
          )}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
          {value}%
        </div>
      )}
    </div>
  );
};

CircularProgress.displayName = "CircularProgress";

export { Progress, CircularProgress };
