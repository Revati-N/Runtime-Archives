import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/notes', label: 'Library' },
    { path: '/tags', label: 'Tags' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className="bg-deep-brown text-parchment shadow-lg sticky top-0 z-50 border-b-4 border-bronze">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-royal-gold hover:text-parchment transition-colors">
          ⚜ Runtime Archives
        </Link>
        <div className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-royal-gold border-b-2 border-royal-gold'
                  : 'text-parchment hover:text-royal-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
