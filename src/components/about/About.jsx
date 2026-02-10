import { assets } from "../../assets/asset"
import LazyImage from "../../utils/LazyImage"
import TitleCard from "../minor-components/TitleCard"

const About = () => {
  return (
    <section className="padding-top mt-10 lg:grid grid-cols-[55%_auto] gap-x-12 items-center padding-main pb-20">
      <div className="content-wrapper">
        <TitleCard title='About' subtitle="About the coffee shop" />
        
        <div className="text-content mt-8 space-y-6">
          <header>
            <h2 className="text-3xl font-fair text-dark mb-2">Welcome to Coffee Shop</h2>
            <p className="leading-relaxed text-accent">
              Coffee Shop is your everyday escape for thoughtfully brewed coffee, calm moments, and good conversation. We believe great coffee doesn’t need to be complicated — just carefully sourced beans, skilled hands, and a space that feels easy to be in.
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-fair text-dark mb-2">What We Serve</h2>
            <p className="leading-relaxed text-accent">
              Our menu focuses on quality and consistency. Every cup is brewed using freshly roasted beans, paired with simple ingredients and attention to detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-fair text-dark mb-2">More Than Coffee</h2>
            <p className="leading-relaxed text-accent">
              Warm lighting, comfortable seating, and a relaxed playlist create a space where you can slow down, focus, or connect. No rush. No pressure.
            </p>
          </section>
        </div>
      </div>

      <div className="image-container mt-10 lg:mt-0 h-full">
        <LazyImage 
          src={assets.aboutImage} 
          // added object-cover here to ensure the positioning has an effect
          
          className="rounded-2xl lg:max-h-[90vh] max-h-[60vh] shadow-lg w-full"
          // This applies the 50% 75% positioning to the <img> tag directly
          innerClassName="object-[50%_75%]" 
          alt='Interior of our cozy coffee shop' 
        />
      </div>
    </section>
  )
}

export default About