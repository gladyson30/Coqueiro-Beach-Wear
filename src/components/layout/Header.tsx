import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full bg-areia border-b border-coco/20 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="font-display text-2xl text-palmeira font-medium">
        Coqueiro Beach Wear
      </Link>

      <nav className="flex gap-6">
        <Link
          to="/"
          className="font-body text-palmeira hover:text-terracota transition-colors"
        >
          Início
        </Link>
        <Link
          to="/sobre"
          className="font-body text-palmeira hover:text-terracota transition-colors"
        >
          Sobre
        </Link>
      </nav>
    </header>
  )
}

export default Header