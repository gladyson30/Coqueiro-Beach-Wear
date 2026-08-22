import type { Product } from '../types/Product'
import { products } from '../data/products'

export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(products)
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const all = await getProducts()
  return all.find((p) => p.id === id)
}