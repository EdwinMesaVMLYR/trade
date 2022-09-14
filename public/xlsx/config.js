export default function config () {
  const obj = [
    {
      name: 'spmk',
      banner: [
        '../xlsx/banner-marcas-spmk.xlsx',
        'local'
      ],
      products: [
        '../xlsx/catalogo-produtos-spmk.xlsx',
        'local'
      ],
      users: [
        '../xlsx/usuarios-catalogo-spmk.xlsx',
        'local'
      ]
    },
    {
      name: 'koe',
      banner: [
        '../xlsx/banner-marcas-spmk.xlsx',
        'local'
      ],
      products: [
        'https://sheet.best/api/sheets/2ba54fe3-6a0a-4842-b40a-93f8c0e6b6f7',
        'rest'
      ]
    },
    {
      name: 'koe2',
      banner: [
        '../xlsx/banner-marcas-spmk.xlsx',
        'local'
      ],
      products: [
        'https://sheet.best/api/sheets/f4eff6ea-75a7-45ef-8e78-721bc293c90a',
        'rest'
      ]
    }
  ]
  return obj
}
