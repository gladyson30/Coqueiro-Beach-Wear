export interface Product {
  id: string
  name: string
  category: 'biquini' | 'maio' | 'saida-de-praia' | 'acessorio'
  price: number
  images: string[]
  description: string
  sizes: string[]
  colors: string[]
}