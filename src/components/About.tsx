import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Banner */}
      <div className="relative h-[300px]">
        <img
          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
          alt="School Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quote */}
        <div className="text-center mb-12">
          <p className="text-xl italic text-[#8B0000]">
            "Attracting Children from Nations, Returning Leaders to the Nations."
          </p>
          <p className="text-sm text-gray-500 mt-2">Pastor Adams • Executive Founder</p>
        </div>

        {/* Mission Statement */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Our Mission Statement</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>To create a platform that can help the foundation's target region of Africa and beyond.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>To build and operate high-class educational and well-resourced high school.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#8B0000] text-white rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>To help build students into persons with good morals conducive to live and work in society.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
              alt="Principal's Office"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Vision Statement</h2>
          <p className="text-gray-700">
            To be a leading educational institution that empowers students to become confident,
            compassionate, and responsible global citizens who excel academically and contribute
            positively to society. Our vision encompasses creating an environment where every
            student can discover their potential and develop the skills needed for success in
            the modern world.
          </p>
        </div>

        {/* School Anthem */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-6">School Anthem</h2>
          <div className="text-center italic">
            <p>Gifted Brain School, where excellence thrives</p>
            <p>With knowledge and wisdom, our spirits arise</p>
            <p>In learning and character, we grow each day</p>
            <p>Preparing for futures bright in every way</p>
          </div>
        </div>

        {/* Campuses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Our Campuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Primary School"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Primary School</h3>
                <p className="text-gray-600 text-sm">
                  Our primary school offers a solid foundation in core subjects while fostering
                  creativity and critical thinking.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg"
                alt="Secondary School"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Secondary School</h3>
                <p className="text-gray-600 text-sm">
                  The secondary school provides comprehensive education with modern facilities
                  and experienced faculty.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg"
                alt="College Prep"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">College Prep</h3>
                <p className="text-gray-600 text-sm">
                  Our college preparatory program ensures students are ready for higher
                  education success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Management Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Principal",
                image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
              },
              {
                name: "Mr. David Williams",
                role: "Vice Principal",
                image: "https://images.pexels.com/photos/5905512/pexels-photo-5905512.jpeg"
              },
              {
                name: "Mrs. Emily Brown",
                role: "Head of Academics",
                image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg"
              },
              {
                name: "Mr. Michael Davis",
                role: "Administrative Head",
                image: "https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events & News */}
        <div>
          <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Events & News</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(8).fill(null).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`https://images.pexels.com/photos/${5905445 + index}/pexels-photo-${5905445 + index}.jpeg`}
                  alt={`Event ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;