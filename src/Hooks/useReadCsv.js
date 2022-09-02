import { usePapaParse } from 'react-papaparse'
export function useReadCsv (nameFile) {
  const { readRemoteFile } = usePapaParse()
  const csvData = []
  readRemoteFile(`https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/${nameFile}.csv`, {
    header: true,
    step: (result) => {
      csvData.push(result.data)
    },
    complete: (results) => {
      console.log(results)
    }
  })
  console.log('csvData', csvData)
  return csvData
}
