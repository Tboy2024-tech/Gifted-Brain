import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, CalendarIcon, MessageSquareIcon, FileTextIcon, SettingsIcon, HelpCircleIcon, LogOutIcon, UserIcon, UsersIcon, BarChartIcon, LayersIcon, ClipboardListIcon, BellIcon } from 'lucide-react';
interface SidebarProps {
  role: 'student' | 'teacher' | 'admin';
}
const Sidebar: React.FC<SidebarProps> = ({
  role
}) => {
  const location = useLocation();
  const basePath = `/${role}-dashboard`;
  const isActive = (path: string) => {
    return location.pathname === `${basePath}${path}`;
  };
  const menuItems = {
    student: [{
      path: '',
      icon: <HomeIcon size={20} />,
      label: 'Dashboard'
    }, {
      path: '/courses',
      icon: <BookOpenIcon size={20} />,
      label: 'My Courses'
    }, {
      path: '/assignments',
      icon: <ClipboardListIcon size={20} />,
      label: 'Assignments'
    }, {
      path: '/grades',
      icon: <FileTextIcon size={20} />,
      label: 'Grades'
    }, {
      path: '/timetable',
      icon: <CalendarIcon size={20} />,
      label: 'Timetable'
    }, {
      path: '/messages',
      icon: <MessageSquareIcon size={20} />,
      label: 'Messages'
    }, {
      path: '/profile',
      icon: <UserIcon size={20} />,
      label: 'Profile'
    }],
    teacher: [{
      path: '',
      icon: <HomeIcon size={20} />,
      label: 'Dashboard'
    }, {
      path: '/classes',
      icon: <UsersIcon size={20} />,
      label: 'My Classes'
    }, {
      path: '/assignments',
      icon: <ClipboardListIcon size={20} />,
      label: 'Assignments'
    }, {
      path: '/grades',
      icon: <FileTextIcon size={20} />,
      label: 'Gradebook'
    }, {
      path: '/attendance',
      icon: <CalendarIcon size={20} />,
      label: 'Attendance'
    }, {
      path: '/messages',
      icon: <MessageSquareIcon size={20} />,
      label: 'Messages'
    }, {
      path: '/profile',
      icon: <UserIcon size={20} />,
      label: 'Profile'
    }],
    admin: [{
      path: '',
      icon: <HomeIcon size={20} />,
      label: 'Dashboard'
    }, {
      path: '/students',
      icon: <UsersIcon size={20} />,
      label: 'Students'
    }, {
      path: '/teachers',
      icon: <UserIcon size={20} />,
      label: 'Teachers'
    }, {
      path: '/classes',
      icon: <LayersIcon size={20} />,
      label: 'Classes'
    }, {
      path: '/timetable',
      icon: <CalendarIcon size={20} />,
      label: 'Timetable'
    }, {
      path: '/reports',
      icon: <BarChartIcon size={20} />,
      label: 'Reports'
    }, {
      path: '/settings',
      icon: <SettingsIcon size={20} />,
      label: 'Settings'
    }]
  };
  const currentMenuItems = menuItems[role];
  return <div className="bg-[#8B0000] text-white h-screen w-64 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-red-800">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Screenshot_2025-05-29_112316.png" alt="Gifted Brain School Logo" className="h-10 w-10 rounded-full bg-white p-1" />
          <div>
            <h1 className="font-bold text-lg">Gifted Brain</h1>
            <p className="text-xs opacity-80">
              {role.charAt(0).toUpperCase() + role.slice(1)} Portal
            </p>
          </div>
        </Link>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {currentMenuItems.map(item => <li key={item.path}>
              <Link to={`${basePath}${item.path}`} className={`flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive(item.path) ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:bg-red-800'}`}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>)}
        </ul>
      </nav>
      {/* Bottom Actions */}
      <div className="p-4 border-t border-red-800">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-800 rounded-md transition">
              <HelpCircleIcon size={20} />
              <span>Help & Support</span>
            </a>
          </li>
          <li>
            <Link to="/login" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-800 rounded-md transition">
              <LogOutIcon size={20} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>;
};
export default Sidebar;