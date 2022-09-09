import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import url from '../xlsx/usuarios-catalogo-spmk.xlsx'
export function useUsers () {
  const [user, setUser] = useState([])
  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await (await fetch(url)).arrayBuffer()
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const data = utils.sheet_to_json(ws) // generate objects
      setUser(data) // update state
    })()
  }, [])
  return user
}
