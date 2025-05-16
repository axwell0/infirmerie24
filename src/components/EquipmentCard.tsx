
import { LucideIcon } from "lucide-react";

interface EquipmentCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const EquipmentCard = ({ icon: Icon, title, className }: EquipmentCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-5 shadow-sm flex flex-col items-center text-center
    border border-gray-100 service-card ${className}`}>
      <div className="p-2 rounded-full bg-medical-blue bg-opacity-10 mb-3">
        <Icon className="h-6 w-6 text-medical-blue" />
      </div>
      <h3 className="font-medium text-base text-gray-800">{title}</h3>
    </div>
  );
};

export default EquipmentCard;
