interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-playfair text-4xl text-primary mb-3">{title}</h2>
      <p className="font-dancing text-2xl text-accent mb-6">{subtitle}</p>
      <div className="w-24 h-1 bg-gold mx-auto"></div>
    </div>
  );
}
