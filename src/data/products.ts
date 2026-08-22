import type { Product } from '../types/Product'
import biquiniCoco from '../assets/imagens/produtos/biquinicoco.png'
import biquiniCocoCostas from '../assets/imagens/produtos/biquinicococostas.png'
import biquiniMare from '../assets/imagens/produtos/biquiniMare.png'

export const products: Product[] = [
  {
    id: '1',
    name: 'Biquíni Coco',
    category: 'biquini',
    price: 129.9,
    images: [biquiniCoco, biquiniCocoCostas],
    description: 'Biquíni com laço no decote, tecido de alta qualidade com proteção UV.',
    sizes: ['P', 'M', 'G'],
    colors: ['preto'],
  },
  {
    id: '2',
    name: 'Biquíni Maré',
    category: 'biquini',
    price: 149.9,
    images: [biquiniMare],
    description: 'Biquíni decote nas costas, tecido com proteção UV50+.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['azul-mar'],
  },
]