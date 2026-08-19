import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="absolute z-100 h-20 w-full px-10 pt-6">
      <Link to={'/'} className="text-lg font-bold tracking-wider">
        Flashcards
      </Link>
    </div>
  )
}
