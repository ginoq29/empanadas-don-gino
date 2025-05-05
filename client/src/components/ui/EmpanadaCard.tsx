interface EmpanadaCardProps {
  image: string;
  name: string;
  description: string;
}

export default function EmpanadaCard({ image, name, description }: EmpanadaCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={`/src/assets/${image}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-playfair font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 font-lato">{description}</p>
      </div>
    </div>
  );
}
