import { useEffect, useState } from "react";
import { navLinks } from "../../assets/asset";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion"; // Fixed import source
import { useMediaQuery } from "@uidotdev/usehooks";

const BottomBar = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [btmBarOpen, setBtmBarOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setBtmBarOpen(true);
      } else if (currentScrollY > lastScrollY) {
        setBtmBarOpen(false);
      } else {
        setBtmBarOpen(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); 

  return (
    <AnimatePresence>
      {btmBarOpen && isMobile && (
        <motion.nav
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          // Using your theme colors: bg-dark and text-primary
          className="fixed h-16 z-50 bg-dark/95 border-t border-accent/20 rounded-t-3xl backdrop-blur-md flex items-center bottom-0 left-0 w-full px-8 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]"
        >
          <menu className="flex justify-between w-full items-center list-none p-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a 
                  className="flex flex-col gap-1 items-center text-primary/70 hover:text-primary transition-colors cursor-pointer" 
                  href={item.url} // Fixed: used item.url instead of navLinks.url
                >
                  <div className="text-xl">
                    <item.icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest font-sans">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </menu>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default BottomBar;