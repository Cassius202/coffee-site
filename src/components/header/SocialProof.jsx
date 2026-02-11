import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { assets, SocialProofStats } from "../../assets/asset";
import LazyImage from "../../utils/LazyImage";

const SocialProof = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div className='back-gradient min-h-100 py-16 w-full text-white flex flex-col padding-main items-center'>
      {/* Refined Badge */}
      <div className="flex gap-3 items-center bg-white/10 backdrop-blur-md border border-white/20 p-1.5 rounded-full pr-4 transition-all hover:bg-white/20">
        <div className="w-22 rounded-full overflow-hidden border-accent">
          <LazyImage src={assets.socialProofImage} className='object-cover' alt='social proof' />
        </div>
        <span className="text-sm font-medium tracking-wide">
          100K+ coffee units sold
        </span>
      </div>

      <h1 className="font-fair mt-8 font-bold text-3xl md:text-5xl text-center leading-tight">
        Follow our thousands of customers <br /> to enjoy lovely coffee
      </h1>

      <div 
        ref={statsRef} 
        className="mt-12 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {SocialProofStats.map((stat, index) => (
          <div 
            key={index} 
            className="group relative bg-stone-50 w-full min-h-[160px] rounded-2xl text-dark cursor-pointer flex flex-col items-center justify-center py-6 px-4 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 border border-stone-200 hover:border-accent"
          >
            {/* Icon Container */}
            <div className="bg-accent/10 text-accent p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <stat.icon className="w-6 h-6" />
            </div>
            
            {/* Number */}
            <p className="font-extrabold text-4xl mt-4 tracking-tight text-dark">
              {isInView ? (
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  delay={index * 0.1}
                  separator=","
                />
              ) : (
                "0"
              )}
              {stat.suffix}
            </p>

            {/* Title */}
            <span className="mt-1 text-sm md:text-base uppercase text-center tracking-widest font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
              {stat.title}
            </span>

            {/* Subtle bottom accent line that grows on hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full group-hover:w-1/3 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;