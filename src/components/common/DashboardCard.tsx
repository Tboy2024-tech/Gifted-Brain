import React from 'react';
interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  className = '',
  footer
}) => {
  return <div className={`bg-cream-50 rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-[#8B0000] flex items-center gap-2">
          {icon && <span className="text-[#8B0000]">{icon}</span>}
          {title}
        </h3>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      {footer && <div className="px-4 sm:px-6 lg:px-8 py-3 bg-cream-100 border-t border-gray-100">
          {footer}
        </div>}
    </div>;
};
export default DashboardCard;