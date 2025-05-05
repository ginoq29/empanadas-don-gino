import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-secondary/20">
      <div className="text-accent text-3xl mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-playfair text-xl mb-3 text-primary">{title}</h3>
      <p className="text-dark-brown font-lato">{description}</p>
    </div>
  );
}
