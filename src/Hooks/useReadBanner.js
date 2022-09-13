import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import { removeCapitalSpace } from '../utils'
import config from '../xlsx/config'

export function useReadBanner (acronym) {
  const [banner, setBanner] = useState([])
  const obj = config()
  const banners = obj.banners.filter((e) => e.name === acronym)
  if (banners[0].type === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(banners[0].url)
        const f = await (a).arrayBuffer()
        const wb = read(f)
        const ws = wb.Sheets[wb.SheetNames[0]]
        const d = utils.sheet_to_json(ws)
        const data = d.map((p) => ({ ...p, keymain: removeCapitalSpace(p.marca) }))
        setBanner(data)
      })()
    }, [])
  }
  return banner
}
