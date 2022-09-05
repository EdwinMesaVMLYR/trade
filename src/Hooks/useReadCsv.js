import { usePapaParse } from 'react-papaparse'

const info = {
  data: [
    {
      id: '1',
      marca: 'Baltica',
      formato: 'LATA',
      tamano: '473',
      descripcion: 'BALTICA LATA 473 X6',
      grados: '5',
      eanintermedio: '8',
      cajas_pallet: '7802130001727',
      urlimagen: '100',
      __parsed_extra: [
        'https://res.cloudinary.com/dkktirn06/image/upload/v1657830410/LOW%20RES%20SPMK%20CATALOG/BALTICA%20LATA%20473%20X6.png'
      ]
    },
    {
      id: '2',
      marca: 'perreo',
      formato: 'LATA',
      tamano: '473',
      descripcion: 'BALTICA LATA 473 X6',
      grados: '5',
      eanintermedio: '8',
      cajas_pallet: '7802130001727',
      urlimagen: '100',
      __parsed_extra: [
        'https://res.cloudinary.com/dkktirn06/image/upload/v1657830410/LOW%20RES%20SPMK%20CATALOG/BALTICA%20LATA%20473%20X6.png'
      ]
    }
  ]
}

export function useReadCsv (nameFile) {
  const { readRemoteFile } = usePapaParse()
  var csvData = []
  readRemoteFile('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/SPMK.csv', {
    header: true,
    dynamicTyping: true,
    step: function (result) {
      csvData.push(result.data)
    },
    complete: function (results) {
      console.log(results)
    }
  })
  console.log(csvData, 'csvData')
  console.log(info, 'info')
  return csvData
}
