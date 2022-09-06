import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

export function userReadBannerXlsx (marca) {
  console.log(marca)
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([])

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await (await fetch('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/banner-marcas_0.xlsx')).arrayBuffer()
      console.log(f)
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const data = utils.sheet_to_json(ws) // generate objects
      console.log(data, 'banner')
      setPres(data) // update state
    })()
  }, [])
  return pres
}
