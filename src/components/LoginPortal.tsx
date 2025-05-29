import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, BookOpenIcon, UserCogIcon } from 'lucide-react';
interface LoginPortalProps {
  setUserRole: (role: string) => void;
}
const LoginPortal: React.FC<LoginPortalProps> = ({
  setUserRole
}) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      setUserRole(selectedRole!);
      // Navigate to appropriate dashboard
      if (selectedRole === 'student') {
        navigate('/student-dashboard');
      } else if (selectedRole === 'teacher') {
        navigate('/teacher-dashboard');
      } else if (selectedRole === 'admin') {
        navigate('/admin-dashboard');
      }
    }, 1500);
  };
  return <div className="min-h-screen flex flex-col bg-cream-100">
      {/* Header */}
      <header className="bg-[#8B0000] text-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/Screenshot_2025-05-29_112316.png" alt="Gifted Brain School Logo" className="h-12 w-12 rounded-full bg-cream-50 p-1" />
            <div>
              <span className="text-xl font-semibold">Gifted Brain School</span>
              <p className="text-xs">Growing Befitting Leaders</p>
            </div>
          </Link>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="w-full max-w-4xl bg-cream-50 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - School Info */}
            <div className="bg-gradient-to-br from-[#8B0000] to-[#a52a2a] text-white p-4 sm:p-6 lg:p-8 md:w-5/12">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <img src="/Screenshot_2025-05-29_112316.png" alt="Gifted Brain School Logo" className="h-16 w-16 rounded-full bg-cream-50 p-1 mb-4" />
                  <h2 className="text-2xl font-bold">Gifted Brain School</h2>
                  <p className="text-sm opacity-80">School Management System</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-3">
                    Welcome to our Portal
                  </h3>
                  <p className="mb-4 text-sm md:text-base">
                    Access your personalized dashboard to manage school
                    activities, track progress, and stay connected with the
                    Gifted Brain School community.
                  </p>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>Access educational resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>Track academic progress</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>Communicate with teachers and staff</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>View announcements and events</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 text-sm">
                  <p>Need help? Contact support:</p>
                  <p className="font-semibold">support@giftedbrainschool.edu</p>
                </div>
              </div>
            </div>
            {/* Right Side - Login Form */}
            <div className="p-4 sm:p-6 lg:p-8 md:w-7/12">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-6">
                Login to Your Portal
              </h2>
              {!selectedRole ? <div>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Please select your role to continue:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button onClick={() => handleRoleSelect('student')} className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-cream-100 transition">
                      <div className="bg-[#8B0000] text-white p-3 rounded-full mb-3">
                        <BookOpenIcon size={24} />
                      </div>
                      <span className="font-medium text-[#8B0000]">
                        Student
                      </span>
                    </button>
                    <button onClick={() => handleRoleSelect('teacher')} className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-cream-100 transition">
                      <div className="bg-[#8B0000] text-white p-3 rounded-full mb-3">
                        <UserIcon size={24} />
                      </div>
                      <span className="font-medium text-[#8B0000]">
                        Teacher
                      </span>
                    </button>
                    <button onClick={() => handleRoleSelect('admin')} className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-cream-100 transition">
                      <div className="bg-[#8B0000] text-white p-3 rounded-full mb-3">
                        <UserCogIcon size={24} />
                      </div>
                      <span className="font-medium text-[#8B0000]">Admin</span>
                    </button>
                  </div>
                </div> : <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-cream-50" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-cream-50" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#8B0000] focus:ring-[#8B0000] border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-[#8B0000] hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button type="submit" disabled={isLoading} className={`w-full bg-[#8B0000] text-white py-2 px-4 rounded-md hover:bg-red-800 transition flex justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                      {isLoading ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> : 'Login'}
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={() => setSelectedRole(null)} className="w-full text-[#8B0000] py-2 px-4 rounded-md border border-[#8B0000] hover:bg-cream-100 transition">
                      Back to Role Selection
                    </button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#8B0000] py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()} Gifted Brain School. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default LoginPortal;