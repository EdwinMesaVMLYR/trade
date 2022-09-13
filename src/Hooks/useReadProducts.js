import { useEffect, useState } from 'react'
import { removeCapitalSpace, removeLocation } from '../utils'
import { read, utils } from 'xlsx'
import config from '../xlsx/config'
import { useLocation } from 'react-router-dom'

export function useReadProducts (acronym) {
  const obj = config()
  const [product, setProduct] = useState([])
  const locationUrl = useLocation().pathname
  let catalogues = []
  if (locationUrl === '/spmk') {
    catalogues = obj.catalogues.filter((e) => e.name === acronym)
  } else {
    const cata = removeLocation(locationUrl, acronym) + '-' + acronym
    catalogues = obj.catalogues.filter((e) => e.name === cata)
  }
  if (catalogues.length === 0) {
    window.location.href = '/404'
  }
  if (catalogues[0].type === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(catalogues[0].url)
        const f = await (a).arrayBuffer()
        const wb = read(f) // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
        const d = utils.sheet_to_json(ws)
        const data = d.map((p) => ({ ...p, keymain: removeCapitalSpace(p.marca) }))
        setProduct(data)
      })()
    }, [])
  } else if (catalogues[0].type === 'external') {
    fetch(catalogues[0].url)
      .then(response => response.json())
      .then(data => setProduct(data))
  }
  return product
}
