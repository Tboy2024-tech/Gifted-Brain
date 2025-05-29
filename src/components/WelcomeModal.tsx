import React, { useEffect, useState } from 'react';
import { X as CloseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Small delay before showing to allow for the fade-in animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      {/* Modal container */}
      <div className="relative bg-cream-50 rounded-lg shadow-xl max-w-4xl w-full mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10" onClick={onClose}>
          <CloseIcon size={24} />
        </button>
        {/* Modal content - two-column layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Students learning" className="w-full h-full object-cover" />
          </div>
          {/* Right side - Content */}
          <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wider text-[#8B0000] font-medium">
              ENROLLMENT OPEN
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1D3557] mt-2 mb-4">
              Don't miss the opportunity to give your child the gift of a
              quality education.
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Join Gifted Brain School for the upcoming academic session and
              provide your child with access to our comprehensive educational
              approach focused on academic excellence and character development.
            </p>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Limited slots available. Apply before June 30th to secure a
              placement.
            </p>
            <div className="mt-2">
              <Link to="/login" className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition" onClick={onClose}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WelcomeModal;