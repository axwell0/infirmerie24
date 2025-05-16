
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
}

const FeatureItem = ({ icon: Icon, title }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="p-2 rounded-full bg-medical-light-green bg-opacity-20">
        <Icon className="h-6 w-6 text-medical-dark-green" />
      </div>
      <h3 className="font-medium text-gray-800">{title}</h3>
    </div>
  );
};

export default FeatureItem;
