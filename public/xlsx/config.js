export default function config () {
  const obj = [
    {
      name: 'spmk',
      banner: [
        '../xlsx/banner-marcas-spmk.xlsx',
        'local'
      ],
      products: [
        '../xlsx/CATALOGOPRODUCTOSSPMK.xlsx',
        'local'
      ],
      users: [
        '../xlsx/usuarios-catalogo-spmk.xlsx',
        'local'
      ],
      logos: [
        '../xlsx/usuarios-catalogo-spmk.xlsx',
        'local'
      ]
    },
    {
      name: 'koa',
      banner: [
        '../xlsx/BANNERSMARCASKOA-KOE.xlsx',
        'local'
      ],
      products: [
        '../xlsx/KOACATALOGOPRODUCTOS.xlsx',
        'local'
      ],
      users: [
        '../xlsx/usuarios-catalogo-spmk.xlsx',
        'local'
      ],
      logos: [
        '../xlsx/usuarios-catalogo-spmk.xlsx',
        'local'
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
