import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, TrophyIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
const LandingPage = () => {
  return <div className="w-full min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#8B0000] text-white py-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-xs">
            <span>Email: info@giftedbrainschool.edu</span>
            <span>|</span>
            <span>Phone: +234 123 4567 890</span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/" className="text-white hover:text-yellow-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="/" className="text-white hover:text-yellow-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63" />
              </svg>
            </a>
            <a href="/" className="text-white hover:text-yellow-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Header/Navigation */}
      <header className="bg-cream-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Screenshot_2025-05-29_112316.png" alt="Gifted Brain School Logo" className="h-16 w-16 rounded-full" />
            <div>
              <span className="text-2xl font-bold text-[#8B0000]">
                Gifted Brain School
              </span>
              <p className="text-sm text-gray-600">Growing Befitting Leaders</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-[#8B0000] font-medium">
              About
            </a>
            <a href="#programs" className="text-gray-700 hover:text-[#8B0000] font-medium">
              Programs
            </a>
            <a href="#facilities" className="text-gray-700 hover:text-[#8B0000] font-medium">
              Facilities
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-[#8B0000] font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#8B0000] font-medium">
              Contact
            </a>
            <Link to="/login" className="bg-[#8B0000] text-white px-4 py-2 rounded-md hover:bg-red-800 transition">
              Portal Login
            </Link>
          </nav>
          <button className="md:hidden text-[#8B0000]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="School children" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg bg-cream-50 bg-opacity-90 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-4">
                Don't miss the opportunity to give your child the gift of a
                quality education.
              </h1>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Our comprehensive educational approach focuses on academic
                excellence and character development.
              </p>
              <Link to="/login" className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">
                About Gifted Brain School
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Gifted Brain School is committed to providing an exceptional
                educational experience that nurtures the intellectual, social,
                and emotional growth of every student.
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Founded on the principles of academic excellence and character
                development, we strive to create a learning environment that
                inspires curiosity, creativity, and a lifelong love for
                learning.
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Our dedicated faculty and staff work tirelessly to ensure that
                each student receives personalized attention and support,
                enabling them to reach their full potential.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      To provide quality education that develops the whole child
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      To foster a love for learning and intellectual curiosity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      To build character and instill positive values
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      To prepare students for future academic and life success
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="School building" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#8B0000] mb-4">
                  Vision Statement
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  To be a leading educational institution that empowers students
                  to become confident, compassionate, and responsible global
                  citizens who excel academically and contribute positively to
                  society.
                </p>
                <h3 className="text-xl font-semibold text-[#8B0000] mb-4">
                  School Anthem
                </h3>
                <p className="text-gray-700 italic text-sm md:text-base">
                  Gifted Brain School, where excellence thrives
                  <br />
                  With knowledge and wisdom, our spirits arise
                  <br />
                  In learning and character, we grow each day
                  <br />
                  Preparing for futures bright in every way
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section id="programs" className="py-16 bg-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cream-50 rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Preschool" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-2">
                  Preschool
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  A nurturing environment for our youngest learners to develop
                  foundational skills through play-based learning.
                </p>
                <a href="#" className="text-[#8B0000] font-medium hover:underline">
                  Learn more
                </a>
              </div>
            </div>
            <div className="bg-cream-50 rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="Elementary School" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-2">
                  Elementary School
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Building strong academic foundations while fostering
                  creativity and critical thinking skills.
                </p>
                <a href="#" className="text-[#8B0000] font-medium hover:underline">
                  Learn more
                </a>
              </div>
            </div>
            <div className="bg-cream-50 rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Junior Secondary" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-2">
                  Junior Secondary
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Comprehensive curriculum designed to prepare students for
                  higher academic challenges.
                </p>
                <a href="#" className="text-[#8B0000] font-medium hover:underline">
                  Learn more
                </a>
              </div>
            </div>
            <div className="bg-cream-50 rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Senior Secondary" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-2">
                  Senior Secondary
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Advanced studies that prepare students for university and
                  future career success.
                </p>
                <a href="#" className="text-[#8B0000] font-medium hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">7</div>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                8000+
              </div>
              <p className="text-sm">Students Educated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">17</div>
              <p className="text-sm">Award-Winning Programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">300</div>
              <p className="text-sm">Dedicated Staff</p>
            </div>
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-[#8B0000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center text-[#8B0000] mb-2">
                Modern Library
              </h3>
              <p className="text-gray-700 text-center">
                Our extensive library houses thousands of books, digital
                resources, and comfortable study spaces to support research and
                learning.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-[#8B0000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div size={32}>🔬</div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#8B0000] mb-2">
                Science Laboratories
              </h3>
              <p className="text-gray-700 text-center">
                State-of-the-art science labs equipped with modern instruments
                for physics, chemistry, and biology experiments.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-[#8B0000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrophyIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center text-[#8B0000] mb-2">
                Sports Complex
              </h3>
              <p className="text-gray-700 text-center">
                Comprehensive sports facilities including football field,
                basketball courts, and swimming pool to promote physical
                fitness.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="School activities" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="School building" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Classroom" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Students" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Library" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Science lab" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="Sports" className="w-full h-48 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Graduation" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#8B0000] text-white px-6 py-2 rounded-md hover:bg-red-800 transition">
              View More
            </button>
          </div>
        </div>
      </section>
      {/* Management Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Management Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000]">
                Dr. Samuel Okafor
              </h3>
              <p className="text-gray-600">Principal</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Vice Principal" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000]">
                Mrs. Amina Adeyemi
              </h3>
              <p className="text-gray-600">Vice Principal</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Head of Academics" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000]">
                Mr. David Nwosu
              </h3>
              <p className="text-gray-600">Head of Academics</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Administrator" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000]">
                Mrs. Elizabeth Eze
              </h3>
              <p className="text-gray-600">School Administrator</p>
            </div>
          </div>
        </div>
      </section>
      {/* Admissions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-6">
            Admission Open
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Join our community of learners and experience quality education that
            prepares your child for a successful future.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Admission flyer" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="Admission flyer" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
          </div>
          <Link to="/login" className="bg-[#8B0000] text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition">
            Apply Now
          </Link>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-6">
                Get in Touch
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="bg-[#8B0000] text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-[#8B0000] mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-700">
                      123 Education Avenue, Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-[#8B0000] mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-700">+234 123 4567 890</p>
                    <p className="text-gray-700">+234 987 6543 210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 text-[#8B0000] mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-700">info@giftedbrainschool.edu</p>
                    <p className="text-gray-700">
                      admissions@giftedbrainschool.edu
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#8B0000] mb-4">
                  Office Hours
                </h3>
                <table className="w-full text-gray-700">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Monday - Friday:</td>
                      <td className="py-2">8:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Saturday:</td>
                      <td className="py-2">9:00 AM - 1:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday:</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Access our comprehensive school management system for students,
            teachers, and administrators.
          </p>
          <Link to="/login" className="bg-white text-[#8B0000] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Access Portal
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#8B0000] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/Screenshot_2025-05-29_112316.png" alt="Gifted Brain School Logo" className="h-12 w-12 rounded-full bg-white p-1" />
                <h3 className="text-xl font-semibold">Gifted Brain School</h3>
              </div>
              <p className="mb-4">
                Nurturing young minds for a brighter future.
              </p>
              <div className="flex gap-4">
                <a href="/" className="hover:text-yellow-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="/" className="hover:text-yellow-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="/" className="hover:text-yellow-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;