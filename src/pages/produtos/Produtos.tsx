import { useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/ui/ProductCard'
import { categories, type CategoryValue } from '../../data/categories'

type FilterValue = 'todos' | CategoryValue

function Produtos() {
  const { products, loading } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>('todos')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filteredProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-areia px-8 py-20">
      <h1 className="font-display text-5xl text-palmeira text-center">
        Nossos Modelos
      </h1>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 font-body text-sm px-5 py-2 rounded-full border border-coco text-palmeira bg-white"
        >
          ☰ Filtrar categoria
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-palmeira/50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative bg-areia w-64 h-full p-6 ml-auto shadow-xl">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-palmeira font-body mb-6"
            >
              ✕ Fechar
            </button>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('todos')
                  setIsSidebarOpen(false)
                }}
                className={`text-left font-body text-sm px-4 py-2 rounded-lg ${
                  selectedCategory === 'todos' ? 'bg-terracota text-areia' : 'text-palmeira'
                }`}
              >
                Todas as categorias
              </button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value)
                    setIsSidebarOpen(false)
                  }}
                  className={`text-left font-body text-sm px-4 py-2 rounded-lg ${
                    selectedCategory === category.value ? 'bg-terracota text-areia' : 'text-palmeira'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="font-body text-palmeira text-center mt-8">
          Carregando...
        </p>
      ) : filteredProducts.length === 0 ? (
        <p className="font-body text-palmeira text-center mt-12">
          Nenhum produto encontrado nessa categoria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Produtos