import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import url from '../xlsx/banner-marcas.xlsx'

export function userReadBannerXlsx (marca) {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([])
  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const a = await fetch(url)
      const f = await (a).arrayBuffer()
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const data = utils.sheet_to_json(ws) // generate objects
      setPres(data) // update state
    })()
  }, [])
  return pres
}
