import { useEffect, useState } from 'react'
import type { Product } from '../types/Product'
import { getProducts } from '../services/productService'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  return { products, loading }
}