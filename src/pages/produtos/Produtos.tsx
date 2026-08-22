import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/ui/ProductCard'

function Produtos() {
  const { products, loading } = useProducts()

  return (
    <div className="min-h-screen bg-areia px-8 py-20">
      <h1 className="font-display text-5xl text-palmeira text-center">
        Nossos Modelos
      </h1>

      {loading ? (
        <p className="font-body text-palmeira text-center mt-8">
          Carregando...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Produtos