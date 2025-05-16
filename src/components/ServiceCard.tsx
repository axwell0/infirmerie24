
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, className }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center service-card 
    border border-gray-100 ${className}`}>
      <div className="p-3 rounded-full bg-medical-light-green bg-opacity-20 mb-4">
        <Icon className="h-8 w-8 text-medical-dark-green" />
      </div>
      <h3 className="font-medium text-lg text-gray-800">{title}</h3>
    </div>
  );
};

export default ServiceCard;
