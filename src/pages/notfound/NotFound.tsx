import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-areia flex flex-col items-center justify-center px-8 text-center">
      <h1 className="font-display text-8xl text-palmeira">404</h1>
      <h2 className="font-display text-3xl text-palmeira mt-4">
        Essa página não foi encontrada
      </h2>
      <p className="font-body text-palmeira/70 mt-3 max-w-md">
        Parece que essa página saiu pra pegar sol e não voltou. Que tal
        conferir nosso catálogo enquanto isso?
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          to="/"
          className="bg-terracota text-areia font-body font-semibold px-8 py-3 rounded-full"
        >
          Voltar ao início
        </Link>
        <Link
          to="/produtos"
          className="border border-palmeira text-palmeira font-body font-semibold px-8 py-3 rounded-full"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  )
}

export default NotFound