import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

export function userReadXlsx () {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([])

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await (await fetch('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/catalogo-produtos-spmk.xlsx')).arrayBuffer()
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const data = utils.sheet_to_json(ws) // generate objects
      setPres(data) // update state
    })()
  }, [])

  /* get state data and export to XLSX */
  /*  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(pres)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Data')
    writeFileXLSX(wb, 'SheetJSReactAoO.xlsx')
  }, [pres]) */
  return pres
}
