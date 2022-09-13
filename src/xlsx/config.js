export default function config () {
  const obj = {
    banners: [
      {
        name: 'spmk',
        url: '../xlsx/banner-marcas-spmk.xlsx',
        type: 'local'
      },
      {
        name: 'spmk2',
        url: '../xlsx/banner-marcas-spmk.xlsx',
        type: 'external'
      }
    ],
    catalogues: [
      {
        name: 'spmk',
        url: '../xlsx/catalogo-produtos-spmk.xlsx',
        type: 'local'
      },
      {
        name: 'spmk2',
        url: '../xlsx/banner-marcas-spmk.xlsx',
        type: 'external'
      }
    ]
  }
  return obj
}
