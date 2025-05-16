
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

interface CallButtonProps {
  className?: string;
  phoneNumber: string;
  label: string;
  large?: boolean;
}

const CallButton = ({ className, phoneNumber, label, large = false }: CallButtonProps) => {
  return (
    <Button 
      className={`bg-medical-dark-green hover:bg-medical-blue transition-colors duration-300 call-button-shadow 
      ${large ? 'text-lg md:text-xl py-6 px-8' : 'text-sm md:text-base'} ${className}`}
      asChild
    >
      <a href="#contact" className="flex items-center gap-2">
        <Phone className={large ? "h-6 w-6" : "h-4 w-4"} />
        {label}
      </a>
    </Button>
  );
};

export default CallButton;
