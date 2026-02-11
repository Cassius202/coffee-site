import { ArrowRight } from "lucide-react";
import TitleCard from "../minor-components/TitleCard";

const MapComponent = () => {
  // Replace this with your actual coffee shop address or Lat/Long
  const destination = encodeURIComponent("Central Station, Sydney, NSW Australia");
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <section id="location" className="w-full py-20 lg:py-25 px-4 max-w-7xl mx-auto">
      <TitleCard 
        title="Location" 
        subtitle="It is easy to find us if you are in Australia" 
      />
      
      <div className="image-of-location w-full mt-10 grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center">
        <div className="text-content w-full space-y-6"> {/* Increased spacing slightly */}
          <h3 className="text-2xl font-semibold">How to get to the coffee shop</h3>
          <p className="text-gray-600 leading-relaxed max-lg:text-lg tracking-wide">
            We are located in the heart of the city. If you are arriving by train, 
            get off at Central Station and take the North exit. 
          </p>

          <div className="grid grid-cols-2 md:flex gap-2 md:flex-col md:gap-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium">Open Hours:</p>
              <p className="text-sm">Mon - Fri: 9am - 5pm</p>
            </div>
            <div className="bg-primary p-4 rounded-lg border-l-4 border-accent">
              <p className="font-medium">Delivery hours:</p>
              <p className="text-sm">Mon - Fri: 11am - 4pm</p>
            </div>
          </div>

          {/* New Get Directions Button */}
          <a 
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-[colors_transform] duration-200 btn"
          >
            Get Directions on Google Maps <ArrowRight size={19} />
          </a>
        </div>

        <div className="w-full h-[450px]">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.449646450626!2d151.2046757!3d-33.8810148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2140b90457%3A0x67399f929656499a!2sCentral%20Station!5e0!3m2!1sen!2sau!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;