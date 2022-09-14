import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import url from '../xlsx/logo-marcas.xlsx'
import { removeCapitalSpace } from '../utils'

export function useLogoBrans () {
  const [logos, setLogos] = useState([])
  useEffect(() => {
    (async () => {
      const f = await (await fetch(url)).arrayBuffer()
      const wb = read(f)
      const ws = wb.Sheets[wb.SheetNames[0]]
      const d = utils.sheet_to_json(ws)
      const data = d.map((p) => ({ ...p, keymain: removeCapitalSpace(p.marca) }))
      setLogos(data)
    })()
  }, [])
  return logos
}
