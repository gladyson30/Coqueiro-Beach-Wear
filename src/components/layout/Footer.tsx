import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-palmeira text-areia px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <h3 className="font-display text-2xl mb-3">
            Coqueiro Beach Wear
          </h3>

          <p className="font-body text-sm text-areia/80 leading-relaxed">
            Moda praia inspirada na natureza. Conforto, estilo e liberdade
            pra viver o seu verão.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wide mb-4">
            Navegação
          </h4>

          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className="font-body text-sm text-areia/80 hover:text-areia transition-colors"
            >
              Início
            </Link>

            <Link
              to="/sobre"
              className="font-body text-sm text-areia/80 hover:text-areia transition-colors"
            >
              Sobre a marca
            </Link>

            <Link
              to="/produtos"
              className="font-body text-sm text-areia/80 hover:text-areia transition-colors"
            >
              Catálogo
            </Link>
          </nav>
        </div>

        {/* Contato e redes sociais */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wide mb-4">
            Contato
          </h4>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5585991020480"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-areia/80 hover:text-areia transition-colors block mb-2"
          >
            WhatsApp: (85) 99102-0480
          </a>

          {/* E-mail */}
          <a
            href="mailto:Coqueirobeach1987@gmail.com"
            className="font-body text-sm text-areia/80 hover:text-areia transition-colors block mb-4"
          >
            Coqueirobeach1987@gmail.com
          </a>

          {/* Instagram */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/Coqueirobeachwear_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-areia/80 hover:text-areia transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 shrink-0"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>

              <span className="font-body text-sm">
                Coqueiro beach wear
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto border-t border-areia/20 mt-10 pt-6">
        <p className="font-body text-xs text-areia/60 text-center">
          © {currentYear} Coqueiro Beach Wear. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer