import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

export function userReadXlsx () {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([])
  const url = 'https://dev-ab-pe-corona.pantheonsite.io/sites/default/files/2022-09/catalogo-produtos-spmk.xlsx'
  /* const header = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'access-control-allow-methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'// no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  } */
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
      // const f = await (await fetch('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/banner-marcas_0.xlsx')).arrayBuffer()
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
