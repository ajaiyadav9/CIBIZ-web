import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
}

export const ProductCard = ({ title, description, icon: Icon, features }: ProductCardProps) => {
  return (
    <Card className="card-premium interactive group h-full">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" className="w-full interactive group-hover:bg-primary group-hover:text-primary-foreground">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};