import { useEffect, useState } from 'react'
import type { Product } from '../types/Product'
import { getProductById } from '../services/productService'

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false))
  }, [id])

  return { product, loading }
}