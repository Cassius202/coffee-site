import { assets } from '../../assets/asset'
import LazyImage from '../../utils/LazyImage'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='max-sm:hidden fixed z-50 w-screen h-14 px-4 sm:px-8 lg:px-18 flex justify-between items-center top-1'>

      <nav className='bg-white/50 h-12 flex items-center rounded-full p-1.5 backdrop-blur-xs justify-between w-full'>
        <div className='flex items-center gap-2 ml-3'>
          <LazyImage src={assets.logo} alt='site' className={'w-8'} />
          <span className='text-accent font-bold font-fair text-xl max-md:hidden'>
            Coffee Shop
          </span>
        </div>
        <Navigation />
        <button className="btn text-sm max-md:hidden rounded-full">
          order now
        </button>
      </nav>
    </header>
  )
}

export default Header