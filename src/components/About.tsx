import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
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
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
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
          className="w-full h-full"
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

      {/* Mission Statement Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#8B0000] mb-8 text-center">Our Mission Statement</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <ul className="space-y-4 text-gray-700">
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
              src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg"
              alt="Mission"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 px-4 md:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-8 text-center">Vision Statement</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                To be a leading educational institution that empowers students to become confident,
                compassionate, and responsible global citizens who excel academically and contribute
                positively to society.
              </p>
              <p className="text-gray-700">
                Our vision encompasses creating an environment where every student can discover their
                potential and develop the skills needed for success in the modern world.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
                alt="Vision"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Anthem Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-8">School Anthem</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              Gifted Brain School, where excellence thrives<br />
              With knowledge and wisdom, our spirits arise<br />
              In learning and character, we grow each day<br />
              Preparing for futures bright in every way
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;