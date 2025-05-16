
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, centered = false, className }: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
