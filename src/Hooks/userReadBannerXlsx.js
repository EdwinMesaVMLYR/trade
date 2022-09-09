import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

export function userReadBannerXlsx (marca) {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([])
  const url = 'https://dev-ab-pe-corona.pantheonsite.io/sites/default/files/2022-09/banner-marcas.xlsx'
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow'
  }
  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await (await fetch(url, requestOptions)).arrayBuffer()
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const data = utils.sheet_to_json(ws) // generate objects
      console.log('debud: ', data)
      setPres(data) // update state
    })()
  }, [])
  return pres
}
