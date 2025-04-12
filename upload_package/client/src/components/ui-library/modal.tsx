import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  hideCloseButton?: boolean;
}

const modalSizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full mx-4",
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  icon,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  variant = "default",
  size = "md",
  className,
  hideCloseButton = false,
}) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const variantClassMap = {
    default: "text-primary",
    success: "text-success",
    warning: "text-warning",
    error: "text-destructive"
  };

  const iconWrapperClassMap = {
    default: "bg-primary/10",
    success: "bg-success/10",
    warning: "bg-warning/10",
    error: "bg-destructive/10"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "sm:max-w-[425px]",
          modalSizeClasses[size],
          className
        )}
        onEscapeKeyDown={onClose}
        onPointerDownOutside={onClose}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        hideCloseButton={hideCloseButton}
      >
        <DialogHeader className="sm:flex sm:items-start">
          {icon && (
            <div className={cn(
              "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full",
              iconWrapperClassMap[variant],
              "sm:mx-0 sm:h-10 sm:w-10"
            )}>
              <span className={cn(variantClassMap[variant])}>
                {icon}
              </span>
            </div>
          )}
          <div className={cn("mt-3 text-center sm:mt-0", icon && "sm:ml-4 sm:text-left")}>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription className="mt-2">{description}</DialogDescription>
            )}
          </div>
        </DialogHeader>

        {children && <div className="mt-2">{children}</div>}

        {(footer || onConfirm) && (
          <DialogFooter className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            {footer ? (
              footer
            ) : (
              <>
                {onConfirm && (
                  <Button 
                    variant={variant === "default" ? "primary" : variant === "error" ? "error" : variant as any} 
                    onClick={handleConfirm}
                    className="sm:ml-3"
                  >
                    {confirmLabel}
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="mt-3 sm:mt-0"
                >
                  {cancelLabel}
                </Button>
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
