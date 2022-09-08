/* import { useState } from 'react'
import { usePapaParse } from 'react-papaparse'

export function useReadCsv (nameFile) {
  const { readRemoteFile } = usePapaParse()
  // State to store parsed data
  const [parsedData, setParsedData] = useState([])

  // State to store table Column name
  // const [tableRows, setTableRows] = useState([])

  // State to store the values
  // const [values, setValues] = useState([])

  // readRemoteFile('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/SPMK.csv', {
  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    // https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/usuarios%20catalogo%20spmk.xlsx
    readRemoteFile('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/SPMKcomas_1.csv', {
      header: true,
      skipEmptyLines: true,
      delimiter: ';',
      complete: function (results) {
        // const rowsArray = []
        const valuesArray = []

        // Iterating data to get column name and their values
        results.data.map((d) => (
          // rowsArray.push(Object.keys(d)),
          valuesArray.push(Object.values(d))
        ))

        // Parsed Data Response in array format
        setParsedData(results.data)

        // Filtered Column Names
        // setTableRows(rowsArray[0])

        // Filtered Values
        // setValues(valuesArray)
      }
    })
  }
  changeHandler()
  return parsedData
}
 */