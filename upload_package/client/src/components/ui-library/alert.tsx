import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const alertVariants = cva(
  "relative rounded-md p-4",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-foreground",
        success: "bg-success/20 text-success-foreground",
        warning: "bg-warning/20 text-warning-foreground",
        error: "bg-destructive/20 text-destructive-foreground",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, title, description, onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex">
          {icon && (
            <div className="flex-shrink-0">
              {icon}
            </div>
          )}
          <div className={cn("flex-1", icon && "ml-3")}>
            {(title || description) ? (
              <>
                {title && <p className="text-sm font-medium">{title}</p>}
                {description && <p className="text-sm mt-1">{description}</p>}
              </>
            ) : children}
          </div>
          {onClose && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className={cn(
                    "inline-flex rounded-md p-1.5",
                    "hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                      "focus:ring-primary": variant === "default",
                      "focus:ring-success": variant === "success",
                      "focus:ring-warning": variant === "warning",
                      "focus:ring-destructive": variant === "error",
                    }
                  )}
                  onClick={onClose}
                >
                  <span className="sr-only">Dismiss</span>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
