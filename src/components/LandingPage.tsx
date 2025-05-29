import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { BookOpenIcon, TrophyIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    quote: "Education is not preparation for life; education is life itself.",
    author: "John Dewey"
  },
  {
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    quote: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    image: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg",
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    quote: "Knowledge is power. Information is liberating. Education is the premise of progress.",
    author: "Kofi Annan"
  }
];

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img 
                src="/Screenshot_2025-05-29_112316.png" 
                alt="School Logo" 
                className="h-12 w-12 rounded-full bg-white p-1"
              />
              <span className="text-xl font-bold">Gifted Brain School</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-yellow-300 transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link to="/about" className="hover:text-yellow-300 transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link to="/login" className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                Portal Login
              </Link>
            </div>
            <button className="md:hidden text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="w-full h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt="Education"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4">
                      "{slide.quote}"
                    </p>
                    <p className="text-lg md:text-xl">- {slide.author}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B0000] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/Screenshot_2025-05-29_112316.png" alt="School Logo" className="h-10 w-10 rounded-full bg-white p-1 mr-2" />
              <span className="text-lg font-semibold">Gifted Brain School</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Instagram</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Gifted Brain School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;