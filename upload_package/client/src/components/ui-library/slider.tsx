import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        warning: "",
        error: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const trackVariants = cva(
  "relative h-2 w-full grow overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "bg-muted",
        success: "bg-success/20",
        warning: "bg-warning/20",
        error: "bg-destructive/20"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const rangeVariants = cva(
  "absolute h-full",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const thumbVariants = cva(
  "block h-5 w-5 rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary",
        success: "border-success",
        warning: "border-warning",
        error: "border-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  showValue?: boolean;
  formatValue?: (value: number) => string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant, showValue, formatValue, ...props }, ref) => {
  const value = props.value || props.defaultValue || [0];
  const displayValue = Array.isArray(value) ? value[0] : 0;
  
  const formattedValue = React.useMemo(() => {
    if (formatValue) {
      return formatValue(displayValue);
    }
    return `${displayValue}%`;
  }, [displayValue, formatValue]);
  
  return (
    <div className="w-full">
      {showValue && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-foreground">{props.name || "Value"}</span>
          <span className="text-sm font-medium text-foreground">{formattedValue}</span>
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(sliderVariants({ variant }), className)}
        {...props}
      >
        <SliderPrimitive.Track className={cn(trackVariants({ variant }))}>
          <SliderPrimitive.Range className={cn(rangeVariants({ variant }))} />
        </SliderPrimitive.Track>
        {props.step && (
          <SliderPrimitive.Thumb className={cn(thumbVariants({ variant }))} />
        )}
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
