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
        url: 'https://sheet.best/api/sheets/2ba54fe3-6a0a-4842-b40a-93f8c0e6b6f7',
        type: 'external'
      },
      {
        name: 'koe-tt',
        url: '../xlsx/banner-marcas-spmk.xlsx',
        type: 'local'
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
        url: 'https://sheet.best/api/sheets/2ba54fe3-6a0a-4842-b40a-93f8c0e6b6f7',
        type: 'external'
      },
      {
        name: 'koe-tt',
        url: '../xlsx/catalogo-produtos-spmk.xlsx',
        type: 'local'
      }
    ]
  }
  return obj
}
