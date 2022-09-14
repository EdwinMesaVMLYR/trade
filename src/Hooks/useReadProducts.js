import { useEffect, useState } from 'react'
import { removeCapitalSpace } from '../utils'
import { read, utils } from 'xlsx'
import config from '../xlsx/config'

export function useReadProducts (acronym) {
  const obj = config()
  const [product, setProduct] = useState([])
  const catalogues = obj.filter((e) => e.name === acronym)
  if (catalogues.length === 0) {
    window.location.href = '/404'
  }
  console.log(catalogues)
  if (catalogues[0].products[1] === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(catalogues[0].products[0])
        const f = await (a).arrayBuffer()
        const wb = read(f) // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
        const d = utils.sheet_to_json(ws)
        const data = d.map((p) => ({ ...p, keymain: removeCapitalSpace(p.marca) }))
        setProduct(data)
      })()
    }, [])
  } else if (catalogues[0].products[1] === 'rest') {
    useEffect(() => {
      fetch(catalogues[0].products[0])
        .then(response => response.json())
        .catch((response) => {
          console.log(response.detail, response.statusText)
        })
        .then(data => setProduct(data))
    }, [])
  }
  console.log(product)
  return product
}
