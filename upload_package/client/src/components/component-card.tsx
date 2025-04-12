import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="space-y-4">{children}</div>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
