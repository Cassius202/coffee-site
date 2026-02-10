import { assets } from "../../assets/asset"
import { cn } from "../../utils/cn"
import LazyImage from "../../utils/LazyImage"

const HeroSection = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col overflow-hidden lg:grid grid-cols-[50%_50%] bg-primary padding-main">
      <div className='flex sm:hidden self-center items-center gap-2 ml-3 mt-11 mb-1'>
          <LazyImage src={assets.logo} alt='site' className={'w-8'} />
          <span className='text-accent font-bold font-fair text-xl'>
            Coffee Shop
          </span>
        </div>
      <div className="text-accent flex flex-col mt-2 sm:mt-18 lg:mt-25">
        <h1 className="text-6xl font-semibold lg:text-left">
          Your Daily Pause, <br />
          <span className="font-fair font-extrabold">Poured Fresh</span>
        </h1>
        <p className="text-accent/70 mt-2 md:text-lg lg:text-xl mb-6 max-lg:text-center">
          Specialty coffee, roasted with care and served just the way you like it.
        </p>
        <div className="flex gap-3 max-sm:flex-col max-lg:self-center relative z-20">
          <button className="btn">
            <a href="#contact">
              Order Online
            </a>
          </button>
          <button className="btn btn-spine">
            Find a location
          </button>
        </div>
      </div>
      <div className="max-lg:mt-20 max-lg:-rotate-65">
        <LazyImage src={assets.heroImage} alt={'hero-image'} definition="height" className={cn('w-full')} />
      </div>
    </div>
  )
}

export default HeroSection