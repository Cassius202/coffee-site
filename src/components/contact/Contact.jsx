import { ArrowRight, MapPin, User, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { assets, details } from "../../assets/asset";
import { useLocalStorage } from "@uidotdev/usehooks";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [location, setLocation] = useLocalStorage('location', '');

  return (
    <section id="contact" className="relative bg-primary min-h-[70vh] py-20 lg:py-25 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[48%_49%] gap-x-[3%] items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          className="hidden lg:block relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src={assets.bikeMan} 
            alt="Fast delivery service" 
            className="w-full h-auto object-contain drop-shadow-[-20px_20px_30px_rgba(37,26,19,0.1)]"
          />
        </motion.div>

        {/* Right Column: Content & Form */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-fair text-dark font-bold mb-4 leading-tight">
              Order Now
            </h1>
            <p className="text-accent font-sans max-w-md lg:mx-0 mx-auto leading-relaxed opacity-80">
              Choose your size, set your location, and we'll handle the rest. Freshly brewed coffee at your doorstep.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="mt-10 w-full flex gap-y-5 flex-col items-center lg:items-start">

            {/* Name Input */}
            <motion.div
              className="w-full sm:w-[450px] p-1.5 h-14 border rounded-full flex border-accent/20 focus-within:border-accent items-center bg-white shadow-sm transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-full w-full relative group flex items-center">
                <span className="absolute left-4">
                  <User size={20} className="text-accent/40 group-focus-within:text-accent transition-colors" />
                </span>
                <input
                  type="text"
                  className="h-full w-full px-12 outline-0 border-0 bg-transparent text-dark placeholder:text-accent/30 rounded-full font-sans"
                  placeholder="Your Name"
                />
              </div>
            </motion.div>

            {/* Coffee Size Dropdown */}
            <motion.div
              className="w-full sm:w-[450px] p-1.5 h-14 border rounded-full flex border-accent/20 focus-within:border-accent items-center bg-white shadow-sm transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-full w-full relative group flex items-center">
                <span className="absolute left-4">
                  <Coffee size={20} className="text-accent/40 group-focus-within:text-accent transition-colors" />
                </span>
                <select
                  className="h-full w-full pl-12 pr-10 outline-0 border-0 bg-transparent text-dark appearance-none cursor-pointer font-medium font-sans"
                  defaultValue=""
                >
                  <option value="" disabled>Select Coffee Size</option>
                  <option value="small">Small (8oz)</option>
                  <option value="medium">Medium (12oz)</option>
                  <option value="large">Large (16oz)</option>
                </select>
                <div className="absolute right-6 pointer-events-none">
                  <div className="border-t-2 border-r-2 border-accent/30 w-2 h-2 rotate-[135deg]"></div>
                </div>
              </div>
            </motion.div>

            {/* Location Input (Button Removed) */}
            <motion.div
              className="w-full sm:w-[450px] p-1.5 h-14 border rounded-full flex border-accent/20 focus-within:border-accent items-center bg-white shadow-sm transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-full w-full relative group flex items-center">
                <span className="absolute left-4">
                  <MapPin size={20} className="text-accent/40 group-focus-within:text-accent transition-colors" />
                </span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-full w-full rounded-full px-12 outline-0 border-0 bg-transparent text-dark placeholder:text-accent/30 font-sans"
                  placeholder="Delivery address"
                />
              </div>
            </motion.div>

            {/* NEW: Combined Button Section */}
            <motion.div 
              className="mt-4 flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <button 
                type="submit"
                className="rounded-full bg-dark text-primary h-14 px-10 flex items-center gap-2 hover:bg-accent active:scale-95 transition-all shadow-lg font-bold uppercase tracking-widest text-sm"
              >
                Order Now
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="text-accent/60 hover:text-dark flex items-center gap-2 text-sm font-medium transition-all group"
                onClick={() => window.open(details.uberEatsLink, '_blank', 'noreferrer')}
              >
                Or order via <span className="underline decoration-accent/20 group-hover:decoration-dark">Uber Eats</span> 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;