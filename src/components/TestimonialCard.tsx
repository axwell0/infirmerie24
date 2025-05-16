
interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <div className="mb-4 text-medical-blue text-4xl font-serif">"</div>
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
  );
};

export default TestimonialCard;
