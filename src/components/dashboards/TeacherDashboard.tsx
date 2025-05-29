import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import DashboardCard from '../common/DashboardCard';
import { UsersIcon, ClipboardListIcon, CalendarIcon, BookOpenIcon, ChevronRightIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon, BarChartIcon, FileTextIcon } from 'lucide-react';
const TeacherDashboard = () => {
  return <div className="flex h-screen bg-cream-100">
      <Sidebar role="teacher" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<TeacherDashboardHome />} />
          <Route path="/classes" element={<TeacherClasses />} />
          <Route path="*" element={<Navigate to="/teacher-dashboard" replace />} />
        </Routes>
      </div>
    </div>;
};
const TeacherDashboardHome = () => {
  return <>
      <Header title="Teacher Dashboard" subtitle="Welcome back, Ms. Johnson" />
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <UsersIcon size={24} className="text-blue-600" />
              </div>
              <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                +2 new
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">126</h3>
            <p className="text-gray-500 text-sm">Total Students</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <BookOpenIcon size={24} className="text-green-600" />
              </div>
              <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">5</h3>
            <p className="text-gray-500 text-sm">Classes Taught</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <ClipboardListIcon size={24} className="text-yellow-600" />
              </div>
              <span className="text-xs font-medium bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                12 pending
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">24</h3>
            <p className="text-gray-500 text-sm">Assignments</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <AlertCircleIcon size={24} className="text-purple-600" />
              </div>
              <span className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                Today
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">3</h3>
            <p className="text-gray-500 text-sm">Upcoming Tests</p>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <DashboardCard title="Today's Schedule" icon={<CalendarIcon size={20} />} className="lg:col-span-1">
            <ul className="space-y-3">
              <li className="flex p-3 bg-blue-50 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">8:00</span>
                  <span className="block text-xs text-gray-500">9:30</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <p className="font-medium text-[#1D3557]">
                      Grade 10 Mathematics
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Room 301 • Algebra II
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    <UsersIcon size={12} className="mr-1" />
                    <span>32 students</span>
                  </div>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">9:45</span>
                  <span className="block text-xs text-gray-500">11:15</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <p className="font-medium text-[#1D3557]">
                      Grade 11 Mathematics
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Room 303 • Calculus
                  </p>
                  <div className="mt-2 flex items-center text-xs text-green-600">
                    <UsersIcon size={12} className="mr-1" />
                    <span>28 students</span>
                  </div>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">11:30</span>
                  <span className="block text-xs text-gray-500">12:30</span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Lunch Break</p>
                  <p className="text-xs text-gray-500 mt-1">Staff Room</p>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">12:45</span>
                  <span className="block text-xs text-gray-500">14:15</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <p className="font-medium text-[#1D3557]">
                      Grade 9 Mathematics
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Room 201 • Geometry
                  </p>
                  <div className="mt-2 flex items-center text-xs text-purple-600">
                    <UsersIcon size={12} className="mr-1" />
                    <span>35 students</span>
                  </div>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-xs text-gray-500">14:30</span>
                  <span className="block text-xs text-gray-500">16:00</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <p className="font-medium text-[#1D3557]">
                      Faculty Meeting
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Conference Room • Weekly Review
                  </p>
                </div>
              </li>
            </ul>
          </DashboardCard>
          {/* Assignments to Grade */}
          <DashboardCard title="Assignments to Grade" icon={<ClipboardListIcon size={20} />} className="lg:col-span-2" footer={<a href="#" className="text-[#1D3557] text-sm font-medium hover:underline flex items-center">
                View all assignments{' '}
                <ChevronRightIcon size={16} className="ml-1" />
              </a>}>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-2">Class</th>
                    <th className="px-4 py-2">Assignment</th>
                    <th className="px-4 py-2">Due Date</th>
                    <th className="px-4 py-2">Submissions</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 10</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">Quadratic Equations</td>
                    <td className="px-4 py-3 text-sm">May 18, 2023</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-[#1D3557] mr-1">
                          28
                        </span>
                        <span className="text-xs text-gray-500">/32</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-[#1D3557] hover:text-[#E63946]">
                        Grade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 11</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">Calculus Limits</td>
                    <td className="px-4 py-3 text-sm">May 17, 2023</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-[#1D3557] mr-1">
                          26
                        </span>
                        <span className="text-xs text-gray-500">/28</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-[#1D3557] hover:text-[#E63946]">
                        Grade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 9</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">Geometry Proofs</td>
                    <td className="px-4 py-3 text-sm">May 15, 2023</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-[#1D3557] mr-1">
                          33
                        </span>
                        <span className="text-xs text-gray-500">/35</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-[#1D3557] hover:text-[#E63946]">
                        Grade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 10</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">Trigonometry Basics</td>
                    <td className="px-4 py-3 text-sm">May 12, 2023</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-[#1D3557] mr-1">
                          30
                        </span>
                        <span className="text-xs text-gray-500">/32</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-400">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DashboardCard>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Student Performance */}
          <DashboardCard title="Class Performance" icon={<BarChartIcon size={20} />} className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Grade 10 Mathematics</option>
                <option>Grade 11 Mathematics</option>
                <option>Grade 9 Mathematics</option>
              </select>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1D3557] rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Average</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#E63946] rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Below Average</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end">
              {/* Simplified Bar Chart */}
              <div className="flex-1 flex items-end justify-around h-56">
                {[75, 82, 65, 90, 78, 60, 85].map((score, i) => <div key={i} className="flex flex-col items-center">
                    <div className={`w-12 rounded-t-md ${score < 70 ? 'bg-[#E63946]' : 'bg-[#1D3557]'}`} style={{
                  height: `${score * 0.5}%`
                }}></div>
                    <p className="mt-2 text-xs font-medium">Test {i + 1}</p>
                    <p className="text-xs text-gray-500">{score}%</p>
                  </div>)}
              </div>
            </div>
          </DashboardCard>
          {/* Students Requiring Attention */}
          <DashboardCard title="Students Requiring Attention" icon={<AlertCircleIcon size={20} />} className="lg:col-span-1">
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-red-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-[#1D3557]">David Johnson</p>
                    <p className="text-xs text-gray-500">
                      Grade 10 • Missing 3 assignments
                    </p>
                  </div>
                </div>
                <XCircleIcon size={16} className="text-[#E63946]" />
              </li>
              <li className="flex items-center justify-between p-3 bg-yellow-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Sarah Williams</p>
                    <p className="text-xs text-gray-500">
                      Grade 11 • Below 60% average
                    </p>
                  </div>
                </div>
                <AlertCircleIcon size={16} className="text-yellow-500" />
              </li>
              <li className="flex items-center justify-between p-3 bg-yellow-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Michael Brown</p>
                    <p className="text-xs text-gray-500">
                      Grade 9 • Attendance issues
                    </p>
                  </div>
                </div>
                <AlertCircleIcon size={16} className="text-yellow-500" />
              </li>
              <li className="flex items-center justify-between p-3 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-[#1D3557]">Emily Davis</p>
                    <p className="text-xs text-gray-500">
                      Grade 10 • Improved this week
                    </p>
                  </div>
                </div>
                <CheckCircleIcon size={16} className="text-green-500" />
              </li>
            </ul>
          </DashboardCard>
        </div>
      </main>
    </>;
};
const TeacherClasses = () => {
  return <>
      <Header title="My Classes" subtitle="Manage your classes and students" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Class Cards */}
          {[{
          grade: 'Grade 10',
          subject: 'Mathematics',
          students: 32,
          room: '301',
          time: '8:00 - 9:30',
          color: 'blue'
        }, {
          grade: 'Grade 11',
          subject: 'Mathematics',
          students: 28,
          room: '303',
          time: '9:45 - 11:15',
          color: 'green'
        }, {
          grade: 'Grade 9',
          subject: 'Mathematics',
          students: 35,
          room: '201',
          time: '12:45 - 14:15',
          color: 'purple'
        }, {
          grade: 'Grade 10',
          subject: 'Advanced Math',
          students: 18,
          room: '302',
          time: '14:30 - 16:00',
          color: 'orange'
        }, {
          grade: 'Grade 12',
          subject: 'Statistics',
          students: 22,
          room: '405',
          time: '10:00 - 11:30',
          color: 'indigo'
        }].map((classItem, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-3 bg-${classItem.color}-500`}></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-[#1D3557]">
                    {classItem.grade}
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                    {classItem.time}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  {classItem.subject}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <UsersIcon size={16} className="text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">
                      {classItem.students} Students
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">
                      Room {classItem.room}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#1D3557] text-white px-4 py-2 rounded-md text-sm hover:bg-[#152A45] transition">
                    Class Details
                  </button>
                  <button className="flex-1 border border-[#1D3557] text-[#1D3557] px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition">
                    Attendance
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-8">
          <DashboardCard title="Recent Class Activities" icon={<FileTextIcon size={20} />}>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Class</th>
                    <th className="px-6 py-3">Activity</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      May 19, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 10 Mathematics</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Quiz: Quadratic Equations</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      May 18, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 11 Mathematics</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Assignment: Calculus Limits</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                        Grading
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      May 17, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 9 Mathematics</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      Lesson: Introduction to Geometry
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      May 16, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2">
                          <BookOpenIcon size={14} />
                        </div>
                        <span>Grade 10 Mathematics</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Parent-Teacher Conference</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DashboardCard>
        </div>
      </main>
    </>;
};
export default TeacherDashboard;