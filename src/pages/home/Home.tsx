import teste1 from '../../assets/imagens/teste1.png'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <section className="relative min-h-screen flex items-center justify-center">
      <img
        src={teste1}
        alt="Modelo usando moda praia Coqueiro Beach Wear"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-palmeira/40" />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-6xl md:text-7xl font-medium text-areia">
          Coqueiro Beach Wear
        </h1>
        <p className="font-body text-lg text-areia mt-4 max-w-xl mx-auto">
          Moda praia inspirada na natureza.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/produtos"
            className="border border-areia text-areia font-body font-semibold px-8 py-3 rounded-full"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
    )

}
export default Home