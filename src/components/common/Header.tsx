import React from 'react';
import { BellIcon, SearchIcon, UserIcon } from 'lucide-react';
interface HeaderProps {
  title: string;
  subtitle?: string;
}
const Header: React.FC<HeaderProps> = ({
  title,
  subtitle
}) => {
  return <header className="bg-cream-50 shadow-sm px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#8B0000]">{title}</h1>
          {subtitle && <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>}
        </div>
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] w-64 bg-cream-50" />
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-cream-100 transition">
            <BellIcon size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#8B0000] rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
          {/* User Menu */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#8B0000] text-white flex items-center justify-center">
              <UserIcon size={18} />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;