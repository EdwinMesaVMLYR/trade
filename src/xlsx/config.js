export default function config () {
  const obj = [
    {
      name: 'spmk',
      banner: [
        '../xlsx/spmk/banner-marcas-spmk.xlsx',
        'local'
      ],
      products: [
        '../xlsx/spmk/CATALOGOPRODUCTOSSPMK.xlsx',
        'local'
      ],
      users: [
        '../xlsx/spmk/usuarios-catalogo-spmk.xlsx',
        'local'
      ],
      logos: [
        '../xlsx/spmk/usuarios-catalogo-spmk.xlsx',
        'local'
      ]
    },
    {
      name: 'koa',
      banner: [
        '../xlsx/koa/BANNERS-MARCAS-KOA-KOE.xlsx',
        'local'
      ],
      products: [
        '../xlsx/koa/KOACATALOGOPRODUCTOS.xlsx',
        'local'
      ],
      users: [
        '../xlsx/koa/usuarios-catalogoKOA.xlsx',
        'local'
      ],
      logos: [
        '../xlsx/koa/LOGOS-DE-MARCAS.xlsx',
        'local'
      ]
    },
    {
      name: 'koe',
      banner: [
        '../xlsx/koe/BANNERS-MARCAS-KOA-KOE.xlsx',
        'local'
      ],
      products: [
        '../xlsx/koe/KOE-CATALOGO-PRODUCTOS.xlsx',
        'local'
      ],
      users: [
        '../xlsx/koe/usuarios-catalogo-KOE.xlsx',
        'local'
      ],
      logos: [
        '../xlsx/koe/LOGOS-DE-MARCAS.xlsx',
        'local'
      ]
    }
  ]
  return obj
}
