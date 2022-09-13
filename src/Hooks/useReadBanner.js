import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import { removeCapitalSpace, removeLocation } from '../utils'
import config from '../xlsx/config'
import { useLocation } from 'react-router-dom'

export function useReadBanner (acronym) {
  const obj = config()
  const [banner, setBanner] = useState([])
  const locationUrl = useLocation().pathname
  let banners = []
  if (locationUrl === '/spmk') {
    banners = obj.banners.filter((e) => e.name === acronym)
  } else {
    const cata = removeLocation(locationUrl, acronym) + '-' + acronym
    banners = obj.banners.filter((e) => e.name === cata)
  }
  if (banners.length === 0) {
    window.location.href = '/404'
  }
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
