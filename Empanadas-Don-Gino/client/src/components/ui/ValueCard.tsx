import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-secondary/20 text-center">
      <div className="text-gold text-3xl mb-4 flex justify-center">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-playfair text-xl mb-3 text-primary">{title}</h3>
      <p className="text-dark-brown font-lato">{description}</p>
    </div>
  );
}
