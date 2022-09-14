import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import { removeCapitalSpace } from '../utils'
import config from '../xlsx/config'

export function useReadBanner (acronym) {
  const obj = config()
  const [banners, setBanners] = useState([])
  const banner = obj.filter((e) => e.name === acronym)
  if (banner[0].banner[1] === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(banner[0].banner[0])
        const f = await (a).arrayBuffer()
        const wb = read(f)
        const ws = wb.Sheets[wb.SheetNames[0]]
        const d = utils.sheet_to_json(ws)
        const data = d.map((p) => ({ ...p, keymain: removeCapitalSpace(p.marca) }))
        setBanners(data)
      })()
    }, [])
  } else if (banner[0].banner[1] === 'rest') {
    useEffect(() => {
      fetch(banner[0].banner[0])
        .then(response => response.json())
        .then(data => setBanners(data))
    }, [])
  }
  return banners
}
