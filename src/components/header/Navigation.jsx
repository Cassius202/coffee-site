import { navLinks } from "../../assets/asset"

const Navigation = () => {
  return (
    <menu className="flex max-sm:hidden text-sm divide-x divide-accent/20">
      {navLinks.map((link, index) => {
        return <li key={index} className="px-4 hover:text-amber-500">
          <a href={link.url}>
            {link.name}
          </a>
        </li>
      })}
    </menu>
  )
}

export default Navigation