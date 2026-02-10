import { Send } from "lucide-react";
import { assets } from "../../assets/asset"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-dark relative h-max overflow-hidden mt-20">

      <div className="inset-0 z-20 pointer-events-none absolute mix-blend-soft-light opacity-25">
        <img src={assets.image1} alt="coffee image footer" className="object-cover inset-0 w-full h-full" />
      </div>

      <div className="bg-none text-primary pt-16 pb-8 px-5 sm:px-8 lg:px-18 isolate">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="Logo" className="w-10" />
            <span className="font-fair font-bold text-2xl tracking-wide">
              Coffee Shop
            </span>
          </div>
          <p className="text-primary/70 max-w-xs leading-relaxed">
            Thoughtfully brewed coffee and a space to breathe. Join us for your daily ritual.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-fair text-lg mb-2 border-b border-primary/20 pb-1">Explore</h4>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#locations" className="hover:text-white transition-colors">Locations</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-fair text-lg mb-2 border-b border-primary/20 pb-1">Social</h4>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

        {/* Contact/Newsletter */}
        <div className="space-y-4 relative z-20">
          <h4 className="font-fair text-lg">Stay Grounded</h4>
          <p className="text-sm text-primary/70">Subscribe for brewing tips and new bean alerts.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-primary/30 rounded-full px-4 py-2 w-full text-sm focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-dark aspect-square p-2.5 rounded-full text-sm font-bold hover:bg-white transition-all">
              <Send size={19}/>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/50 uppercase tracking-widest">
        <p>© {currentYear} Coffee Shop. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer