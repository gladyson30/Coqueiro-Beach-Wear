import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'

function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const { product, loading } = useProduct(id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [touchStart, setTouchStart] = useState(0)

  if (loading) {
    return (
      <div className="min-h-screen bg-areia flex items-center justify-center">
        <p className="font-body text-palmeira">Carregando...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-areia flex flex-col items-center justify-center gap-4">
        <p className="font-body text-palmeira">Produto não encontrado.</p>
        <Link to="/produtos" className="text-terracota underline">
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  const totalImages = product.images.length

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % totalImages)
  }

  const goToPrev = () => {
    setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) goToNext()
    if (diff < -50) goToPrev()
  }

  return (
    <div className="min-h-screen bg-areia px-8 py-16">
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 text-palmeira font-body hover:text-terracota transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Voltar ao catálogo
        </Link>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <div
            className="relative select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full rounded-2xl object-cover"
              draggable={false}
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-areia/80 hover:bg-areia text-palmeira rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-areia/80 hover:bg-areia text-palmeira rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  aria-label="Próxima foto"
                >
                  ›
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        selectedImage === index ? 'bg-terracota' : 'bg-areia/70'
                      }`}
                      aria-label={`Ver foto ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {totalImages > 1 && (
            <div className="flex gap-3 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-terracota' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="font-display text-4xl text-palmeira">{product.name}</h1>
          <p className="font-body text-2xl text-terracota font-semibold mt-2">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          <p className="font-body text-palmeira mt-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6">
            <p className="font-body text-sm text-palmeira font-semibold mb-2">
              Tamanhos disponíveis:
            </p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="border border-coco text-coco rounded-full px-4 py-1 text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdutoDetalhe