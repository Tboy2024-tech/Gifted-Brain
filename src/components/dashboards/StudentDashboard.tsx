import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import DashboardCard from '../common/DashboardCard';
import { BookOpenIcon, CalendarIcon, ClipboardListIcon, AlertCircleIcon, TrendingUpIcon, CheckCircleIcon, XCircleIcon, ChevronRightIcon, ClockIcon } from 'lucide-react';
const StudentDashboard = () => {
  return <div className="flex h-screen bg-cream-100">
      <Sidebar role="student" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<StudentDashboardHome />} />
          <Route path="/courses" element={<StudentCourses />} />
          <Route path="/assignments" element={<StudentAssignments />} />
          <Route path="*" element={<Navigate to="/student-dashboard" replace />} />
        </Routes>
      </div>
    </div>;
};
const StudentDashboardHome = () => {
  return <>
      <Header title="Student Dashboard" subtitle="Welcome back, John Doe" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Attendance Card */}
          <DashboardCard title="Attendance" icon={<CalendarIcon size={20} />} className="col-span-1">
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#E63946] flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-[#1D3557]">
                    92%
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Present
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-sm md:text-base text-gray-500">Present</p>
                <p className="font-semibold text-[#1D3557]">46</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Absent</p>
                <p className="font-semibold text-[#1D3557]">4</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Late</p>
                <p className="font-semibold text-[#1D3557]">2</p>
              </div>
            </div>
          </DashboardCard>
          {/* GPA Card */}
          <DashboardCard title="Academic Performance" icon={<TrendingUpIcon size={20} />} className="col-span-1">
            <div className="flex items-center justify-center mb-4">
              <div className="w-32 h-32 rounded-full border-8 border-[#1D3557] flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-[#1D3557]">
                    3.8
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    GPA
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-sm md:text-base text-gray-500">Position</p>
                <p className="font-semibold text-[#1D3557]">3rd</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Percentile</p>
                <p className="font-semibold text-[#1D3557]">92%</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Trend</p>
                <p className="font-semibold text-green-500 flex items-center justify-center">
                  <TrendingUpIcon size={16} className="mr-1" /> Up
                </p>
              </div>
            </div>
          </DashboardCard>
          {/* Upcoming Tests Card */}
          <DashboardCard title="Upcoming Tests" icon={<AlertCircleIcon size={20} />} className="col-span-1">
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E63946] text-white flex items-center justify-center mr-3">
                    <BookOpenIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Mathematics</p>
                    <p className="text-xs text-gray-500">Chapter 7: Calculus</p>
                  </div>
                </div>
                <span className="text-sm md:text-base font-medium text-[#E63946]">
                  Tomorrow
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1D3557] text-white flex items-center justify-center mr-3">
                    <BookOpenIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Physics</p>
                    <p className="text-xs text-gray-500">Unit 4: Mechanics</p>
                  </div>
                </div>
                <span className="text-sm md:text-base text-gray-500">
                  In 3 days
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1D3557] text-white flex items-center justify-center mr-3">
                    <BookOpenIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Chemistry</p>
                    <p className="text-xs text-gray-500">Periodic Table</p>
                  </div>
                </div>
                <span className="text-sm md:text-base text-gray-500">
                  Next week
                </span>
              </li>
            </ul>
          </DashboardCard>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assignments Card */}
          <DashboardCard title="Pending Assignments" icon={<ClipboardListIcon size={20} />} className="lg:col-span-2" footer={<a href="#" className="text-[#1D3557] text-sm md:text-base font-medium hover:underline flex items-center">
                View all assignments{' '}
                <ChevronRightIcon size={16} className="ml-1" />
              </a>}>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Assignment</th>
                    <th className="px-4 py-2">Due Date</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span className="text-sm md:text-base">English</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base">
                      Essay on Shakespeare
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <ClockIcon size={14} className="mr-1 text-[#E63946]" />
                        <span>Tomorrow</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                        In Progress
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span className="text-sm md:text-base">Biology</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base">
                      Cell Structure Report
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <ClockIcon size={14} className="mr-1" />
                        <span>3 days</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                        Not Started
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span className="text-sm md:text-base">History</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base">
                      Ancient Civilizations
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <ClockIcon size={14} className="mr-1" />
                        <span>Next week</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        Draft Saved
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DashboardCard>
          {/* Timetable Card */}
          <DashboardCard title="Today's Schedule" icon={<CalendarIcon size={20} />} className="col-span-1" footer={<a href="#" className="text-[#1D3557] text-sm md:text-base font-medium hover:underline flex items-center">
                Full timetable <ChevronRightIcon size={16} className="ml-1" />
              </a>}>
            <ul className="space-y-3">
              <li className="flex items-center p-2 bg-cream-100 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">8:00</span>
                  <span className="block text-xs text-gray-500">9:30</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#1D3557]">Mathematics</p>
                  <p className="text-xs text-gray-500">
                    Room 301 • Mr. Johnson
                  </p>
                </div>
                <div className="w-2 h-10 bg-[#1D3557] rounded-full"></div>
              </li>
              <li className="flex items-center p-2 bg-cream-100 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">9:45</span>
                  <span className="block text-xs text-gray-500">11:15</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#1D3557]">Physics</p>
                  <p className="text-xs text-gray-500">Room 405 • Mrs. Smith</p>
                </div>
                <div className="w-2 h-10 bg-[#E63946] rounded-full"></div>
              </li>
              <li className="flex items-center p-2 bg-cream-100 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">11:30</span>
                  <span className="block text-xs text-gray-500">12:30</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#1D3557]">Lunch Break</p>
                  <p className="text-xs text-gray-500">Cafeteria</p>
                </div>
                <div className="w-2 h-10 bg-green-500 rounded-full"></div>
              </li>
              <li className="flex items-center p-2 bg-cream-100 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">12:45</span>
                  <span className="block text-xs text-gray-500">14:15</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#1D3557]">English</p>
                  <p className="text-xs text-gray-500">Room 102 • Ms. Davis</p>
                </div>
                <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
              </li>
            </ul>
          </DashboardCard>
        </div>
      </main>
    </>;
};
const StudentCourses = () => {
  return <>
      <Header title="My Courses" subtitle="View all your enrolled courses" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Cards */}
          {[{
          name: 'Mathematics',
          teacher: 'Mr. Johnson',
          progress: 75,
          color: 'blue'
        }, {
          name: 'Physics',
          teacher: 'Mrs. Smith',
          progress: 60,
          color: 'red'
        }, {
          name: 'Chemistry',
          teacher: 'Dr. Williams',
          progress: 45,
          color: 'green'
        }, {
          name: 'English Literature',
          teacher: 'Ms. Davis',
          progress: 80,
          color: 'purple'
        }, {
          name: 'History',
          teacher: 'Mr. Brown',
          progress: 65,
          color: 'yellow'
        }, {
          name: 'Computer Science',
          teacher: 'Mrs. Wilson',
          progress: 90,
          color: 'indigo'
        }].map((course, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-3 bg-${course.color}-500`}></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[#1D3557] mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{course.teacher}</p>
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-[#1D3557]">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`bg-${course.color}-500 h-2.5 rounded-full`} style={{
                width: `${course.progress}%`
              }}></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="text-[#1D3557] text-sm font-medium hover:underline">
                    View Details
                  </button>
                  <button className="text-[#E63946] text-sm font-medium hover:underline">
                    Resources
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </main>
    </>;
};
const StudentAssignments = () => {
  return <>
      <Header title="Assignments" subtitle="Track all your assignments" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-[#1D3557]">All Assignments</h3>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>English</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Late</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Assignment</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Assigned Date</th>
                  <th className="px-6 py-3">Due Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1D3557]">
                      Essay on Shakespeare
                    </p>
                    <p className="text-xs text-gray-500">2500 words</p>
                  </td>
                  <td className="px-6 py-4">English</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    15 May 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-[#E63946]">
                    22 May 2023
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      In Progress
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1D3557] hover:text-[#E63946]">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1D3557]">
                      Calculus Problem Set
                    </p>
                    <p className="text-xs text-gray-500">20 problems</p>
                  </td>
                  <td className="px-6 py-4">Mathematics</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    10 May 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    18 May 2023
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1D3557] hover:text-[#E63946]">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1D3557]">
                      Lab Report: Acids & Bases
                    </p>
                    <p className="text-xs text-gray-500">Experiment results</p>
                  </td>
                  <td className="px-6 py-4">Chemistry</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    8 May 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-red-500">
                    16 May 2023
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      Late
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1D3557] hover:text-[#E63946]">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1D3557]">
                      Ancient Civilizations Research
                    </p>
                    <p className="text-xs text-gray-500">Group project</p>
                  </td>
                  <td className="px-6 py-4">History</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    12 May 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    29 May 2023
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Assigned
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1D3557] hover:text-[#E63946]">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1D3557]">
                      Programming Project
                    </p>
                    <p className="text-xs text-gray-500">Python application</p>
                  </td>
                  <td className="px-6 py-4">Computer Science</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    5 May 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    19 May 2023
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1D3557] hover:text-[#E63946]">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard title="Assignment Completion" icon={<CheckCircleIcon size={20} />}>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-[#1D3557] flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-[#1D3557]">
                    75%
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Completed
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-sm md:text-base text-gray-500">Completed</p>
                <p className="font-semibold text-green-500">15</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Pending</p>
                <p className="font-semibold text-yellow-500">4</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500">Late</p>
                <p className="font-semibold text-red-500">1</p>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard title="Upcoming Deadlines" icon={<ClockIcon size={20} />}>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E63946] text-white flex items-center justify-center mr-3">
                    <ClipboardListIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">English Essay</p>
                    <p className="text-xs text-gray-500">
                      Due tomorrow at 11:59 PM
                    </p>
                  </div>
                </div>
                <XCircleIcon size={20} className="text-[#E63946]" />
              </li>
              <li className="flex items-center justify-between p-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1D3557] text-white flex items-center justify-center mr-3">
                    <ClipboardListIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">
                      Physics Problem Set
                    </p>
                    <p className="text-xs text-gray-500">Due in 3 days</p>
                  </div>
                </div>
                <CheckCircleIcon size={20} className="text-green-500" />
              </li>
              <li className="flex items-center justify-between p-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1D3557] text-white flex items-center justify-center mr-3">
                    <ClipboardListIcon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1D3557]">
                      History Research
                    </p>
                    <p className="text-xs text-gray-500">Due next week</p>
                  </div>
                </div>
                <CheckCircleIcon size={20} className="text-yellow-500" />
              </li>
            </ul>
          </DashboardCard>
        </div>
      </main>
    </>;
};
export default StudentDashboard;