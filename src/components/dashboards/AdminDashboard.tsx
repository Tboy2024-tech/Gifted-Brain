import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import DashboardCard from '../common/DashboardCard';
import { UsersIcon, UserIcon, BookOpenIcon, BuildingIcon, CalendarIcon, BarChartIcon, TrendingUpIcon, TrendingDownIcon, ChevronRightIcon, BellIcon, ClipboardListIcon, GraduationCapIcon, FileTextIcon } from 'lucide-react';
const AdminDashboard = () => {
  return <div className="flex h-screen bg-cream-100">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<AdminDashboardHome />} />
          <Route path="/students" element={<AdminStudents />} />
          <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />
        </Routes>
      </div>
    </div>;
};
const AdminDashboardHome = () => {
  return <>
      <Header title="Admin Dashboard" subtitle="Welcome back, Principal Adams" />
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <UsersIcon size={24} className="text-blue-600" />
              </div>
              <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                +12 new
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">842</h3>
            <p className="text-gray-500 text-sm">Total Students</p>
            <div className="mt-2 flex items-center text-xs text-green-500">
              <TrendingUpIcon size={14} className="mr-1" />
              <span>5.2% increase from last year</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <UserIcon size={24} className="text-green-600" />
              </div>
              <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded-full">
                +3 new
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">64</h3>
            <p className="text-gray-500 text-sm">Teaching Staff</p>
            <div className="mt-2 flex items-center text-xs text-green-500">
              <TrendingUpIcon size={14} className="mr-1" />
              <span>2.4% increase from last year</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <BookOpenIcon size={24} className="text-yellow-600" />
              </div>
              <span className="text-xs font-medium bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">36</h3>
            <p className="text-gray-500 text-sm">Classes</p>
            <div className="mt-2 flex items-center text-xs text-yellow-500">
              <span>Same as last year</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <BuildingIcon size={24} className="text-purple-600" />
              </div>
              <span className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                3 new
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D3557]">18</h3>
            <p className="text-gray-500 text-sm">Facilities</p>
            <div className="mt-2 flex items-center text-xs text-green-500">
              <TrendingUpIcon size={14} className="mr-1" />
              <span>3 new labs added</span>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Enrollment Trends */}
          <DashboardCard title="Enrollment Trends" icon={<BarChartIcon size={20} />} className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-500">
                Academic Year 2023-2024
              </h4>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1D3557] rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Students</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#E63946] rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Capacity</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end">
              {/* Simplified Bar Chart */}
              <div className="flex-1 flex items-end justify-around h-56">
                {[{
                grade: 'Grade 7',
                students: 120,
                capacity: 150
              }, {
                grade: 'Grade 8',
                students: 135,
                capacity: 150
              }, {
                grade: 'Grade 9',
                students: 142,
                capacity: 150
              }, {
                grade: 'Grade 10',
                students: 128,
                capacity: 150
              }, {
                grade: 'Grade 11',
                students: 115,
                capacity: 150
              }, {
                grade: 'Grade 12',
                students: 105,
                capacity: 150
              }].map((data, i) => <div key={i} className="flex flex-col items-center">
                    <div className="relative w-16">
                      <div className="w-8 absolute left-0 rounded-t-md bg-[#1D3557]" style={{
                    height: `${data.students / 150 * 100}%`,
                    bottom: 0
                  }}></div>
                      <div className="w-8 absolute right-0 rounded-t-md bg-[#E63946] opacity-30" style={{
                    height: `${data.capacity / 150 * 100}%`,
                    bottom: 0
                  }}></div>
                    </div>
                    <p className="mt-2 text-xs font-medium">{data.grade}</p>
                    <p className="text-xs text-gray-500">
                      {data.students}/{data.capacity}
                    </p>
                  </div>)}
              </div>
            </div>
          </DashboardCard>
          {/* Announcements */}
          <DashboardCard title="Recent Announcements" icon={<BellIcon size={20} />} className="lg:col-span-1" footer={<button className="text-[#1D3557] text-sm font-medium hover:underline flex items-center">
                Create Announcement{' '}
                <ChevronRightIcon size={16} className="ml-1" />
              </button>}>
            <ul className="space-y-4">
              <li className="border-l-4 border-[#E63946] pl-4 py-1">
                <p className="font-medium text-[#1D3557]">
                  End of Term Examinations
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  Starting June 5th, 2023
                </p>
                <p className="text-sm">
                  All teachers must submit question papers by May 25th.
                </p>
              </li>
              <li className="border-l-4 border-[#1D3557] pl-4 py-1">
                <p className="font-medium text-[#1D3557]">
                  Teacher Professional Development
                </p>
                <p className="text-xs text-gray-500 mb-1">May 27th, 2023</p>
                <p className="text-sm">
                  Mandatory training session on new curriculum framework.
                </p>
              </li>
              <li className="border-l-4 border-green-500 pl-4 py-1">
                <p className="font-medium text-[#1D3557]">Annual Sports Day</p>
                <p className="text-xs text-gray-500 mb-1">June 15th, 2023</p>
                <p className="text-sm">
                  All students and staff are expected to participate.
                </p>
              </li>
              <li className="border-l-4 border-yellow-500 pl-4 py-1">
                <p className="font-medium text-[#1D3557]">
                  Parent-Teacher Conference
                </p>
                <p className="text-xs text-gray-500 mb-1">June 10th, 2023</p>
                <p className="text-sm">
                  Schedule will be shared with all staff next week.
                </p>
              </li>
            </ul>
          </DashboardCard>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Academic Performance */}
          <DashboardCard title="Academic Performance" icon={<GraduationCapIcon size={20} />} className="lg:col-span-1">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 7</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '78%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 8</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '82%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 9</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 10</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '85%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 11</span>
                  <span className="text-sm font-medium">79%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '79%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Grade 12</span>
                  <span className="text-sm font-medium">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1D3557] h-2 rounded-full" style={{
                  width: '88%'
                }}></div>
                </div>
              </div>
            </div>
          </DashboardCard>
          {/* Calendar */}
          <DashboardCard title="Upcoming Events" icon={<CalendarIcon size={20} />} className="lg:col-span-1">
            <ul className="space-y-3">
              <li className="flex p-3 bg-red-50 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-sm font-medium text-[#E63946]">
                    May
                  </span>
                  <span className="block text-xl font-bold text-[#E63946]">
                    25
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Exam Papers Due</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Teachers to submit all exam papers
                  </p>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-sm font-medium text-[#1D3557]">
                    May
                  </span>
                  <span className="block text-xl font-bold text-[#1D3557]">
                    27
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Teacher Training</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Professional Development Day
                  </p>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-sm font-medium text-[#1D3557]">
                    Jun
                  </span>
                  <span className="block text-xl font-bold text-[#1D3557]">
                    05
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">
                    Examinations Begin
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    End of Term Examinations
                  </p>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-sm font-medium text-[#1D3557]">
                    Jun
                  </span>
                  <span className="block text-xl font-bold text-[#1D3557]">
                    10
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">
                    Parent-Teacher Conference
                  </p>
                  <p className="text-xs text-gray-500 mt-1">All Classes</p>
                </div>
              </li>
              <li className="flex p-3 rounded-md">
                <div className="w-12 text-center mr-3">
                  <span className="block text-sm font-medium text-[#1D3557]">
                    Jun
                  </span>
                  <span className="block text-xl font-bold text-[#1D3557]">
                    15
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">
                    Annual Sports Day
                  </p>
                  <p className="text-xs text-gray-500 mt-1">School Grounds</p>
                </div>
              </li>
            </ul>
          </DashboardCard>
          {/* Recent Activity */}
          <DashboardCard title="Recent System Activity" icon={<FileTextIcon size={20} />} className="lg:col-span-1">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <UserIcon size={14} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-[#1D3557]">
                      Ms. Johnson
                    </span>{' '}
                    updated grades for{' '}
                    <span className="font-medium">Grade 10 Mathematics</span>
                  </p>
                  <p className="text-xs text-gray-500">Today, 10:23 AM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <UsersIcon size={14} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-[#1D3557]">
                      2 new students
                    </span>{' '}
                    registered for <span className="font-medium">Grade 9</span>
                  </p>
                  <p className="text-xs text-gray-500">Yesterday, 2:45 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <ClipboardListIcon size={14} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-[#1D3557]">
                      Timetable updated
                    </span>{' '}
                    for next academic year
                  </p>
                  <p className="text-xs text-gray-500">Yesterday, 11:30 AM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                  <BellIcon size={14} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-[#1D3557]">
                      System maintenance
                    </span>{' '}
                    scheduled for this weekend
                  </p>
                  <p className="text-xs text-gray-500">May 18, 2023</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                  <BuildingIcon size={14} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-[#1D3557]">
                      Facility request
                    </span>{' '}
                    approved for Science Lab renovation
                  </p>
                  <p className="text-xs text-gray-500">May 17, 2023</p>
                </div>
              </li>
            </ul>
          </DashboardCard>
        </div>
      </main>
    </>;
};
const AdminStudents = () => {
  return <>
      <Header title="Student Management" subtitle="View and manage all students" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-[#1D3557]">All Students</h3>
            <div className="flex gap-2">
              <div className="relative">
                <input type="text" placeholder="Search students..." className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3557] w-64" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2.5 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>All Grades</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
              <button className="bg-[#1D3557] text-white px-4 py-2 rounded-md hover:bg-[#152A45] transition">
                Add Student
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Student ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Grade</th>
                  <th className="px-6 py-3">Gender</th>
                  <th className="px-6 py-3">Parent/Guardian</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[{
                id: 'GBS2023001',
                name: 'John Smith',
                grade: '10',
                gender: 'Male',
                parent: 'Robert Smith',
                contact: '+234 123 4567',
                status: 'Active'
              }, {
                id: 'GBS2023015',
                name: 'Sarah Johnson',
                grade: '9',
                gender: 'Female',
                parent: 'Michael Johnson',
                contact: '+234 234 5678',
                status: 'Active'
              }, {
                id: 'GBS2023042',
                name: 'David Williams',
                grade: '11',
                gender: 'Male',
                parent: 'James Williams',
                contact: '+234 345 6789',
                status: 'Active'
              }, {
                id: 'GBS2023078',
                name: 'Emily Brown',
                grade: '8',
                gender: 'Female',
                parent: 'Jennifer Brown',
                contact: '+234 456 7890',
                status: 'Active'
              }, {
                id: 'GBS2023103',
                name: 'Michael Davis',
                grade: '12',
                gender: 'Male',
                parent: 'Patricia Davis',
                contact: '+234 567 8901',
                status: 'Inactive'
              }, {
                id: 'GBS2023156',
                name: 'Jessica Wilson',
                grade: '7',
                gender: 'Female',
                parent: 'Thomas Wilson',
                contact: '+234 678 9012',
                status: 'Active'
              }, {
                id: 'GBS2023189',
                name: 'Daniel Taylor',
                grade: '10',
                gender: 'Male',
                parent: 'Charles Taylor',
                contact: '+234 789 0123',
                status: 'Active'
              }, {
                id: 'GBS2023224',
                name: 'Olivia Martinez',
                grade: '9',
                gender: 'Female',
                parent: 'Linda Martinez',
                contact: '+234 890 1234',
                status: 'Active'
              }].map((student, index) => <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {student.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Grade {student.grade}</td>
                    <td className="px-6 py-4">{student.gender}</td>
                    <td className="px-6 py-4">{student.parent}</td>
                    <td className="px-6 py-4">{student.contact}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-[#1D3557] hover:text-[#E63946] mr-3">
                        View
                      </button>
                      <button className="text-[#1D3557] hover:text-[#E63946] mr-3">
                        Edit
                      </button>
                      <button className="text-gray-400 hover:text-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">8</span> of{' '}
              <span className="font-medium">842</span> results
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#1D3557] text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard title="Student Distribution" icon={<BarChartIcon size={20} />}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-500">
                Gender Distribution
              </h4>
            </div>
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#1D3557]">
                      48%
                    </span>
                    <span className="text-gray-500 text-sm">Male</span>
                  </div>
                </div>
                <p className="mt-2 font-medium">405 Students</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-8 border-pink-500 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#1D3557]">
                      52%
                    </span>
                    <span className="text-gray-500 text-sm">Female</span>
                  </div>
                </div>
                <p className="mt-2 font-medium">437 Students</p>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard title="New Admissions" icon={<TrendingUpIcon size={20} />}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-500">
                Monthly Trend
              </h4>
            </div>
            <div className="h-64 flex items-end">
              {/* Simplified Line Chart */}
              <div className="flex-1 flex items-end justify-around h-56">
                {[{
                month: 'Jan',
                count: 12
              }, {
                month: 'Feb',
                count: 8
              }, {
                month: 'Mar',
                count: 15
              }, {
                month: 'Apr',
                count: 10
              }, {
                month: 'May',
                count: 18
              }].map((data, i) => <div key={i} className="flex flex-col items-center">
                    <div className="w-12 rounded-t-md bg-[#1D3557]" style={{
                  height: `${data.count / 20 * 100}%`
                }}></div>
                    <p className="mt-2 text-xs font-medium">{data.month}</p>
                    <p className="text-xs text-gray-500">{data.count}</p>
                  </div>)}
              </div>
            </div>
          </DashboardCard>
        </div>
      </main>
    </>;
};
export default AdminDashboard;