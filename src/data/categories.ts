export const categories = [
  { label: 'Biquínis', value: 'biquini' },
  { label: 'Maiôs', value: 'maio' },
  { label: 'Saídas de praia', value: 'saida-de-praia' },
  { label: 'Shorts', value: 'shorts' },
  { label: 'Vestidos', value: 'vestido' },
  { label: 'Cangas', value: 'canga' },
  { label: 'Acessórios', value: 'acessorio' },
] as const

export type CategoryValue = typeof categories[number]['value']