import { Link } from 'react-router-dom'
import type { Product } from '../../types/Product'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/produtos/${product.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="font-display text-xl text-palmeira">{product.name}</h3>
        <p className="font-body text-terracota font-semibold mt-1">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <div className="flex gap-2 mt-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="text-xs border border-coco text-coco rounded-full px-2 py-1"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard