import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import config from '../xlsx/config'
export function useReadProducts (acronym) {
  const [product, setProduct] = useState([])
  const obj = config()
  const catalogues = obj.catalogues.filter((e) => e.name === acronym)
  if (catalogues[0].type === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(catalogues[0].url)
        const f = await (a).arrayBuffer()
        const wb = read(f) // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
        const d = utils.sheet_to_json(ws)
        setProduct(d)
      })()
    }, [])
  }
  return product
}
