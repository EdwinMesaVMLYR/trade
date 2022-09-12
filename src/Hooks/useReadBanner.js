import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import config from '../xlsx/config'
export function useReadBanner (acronym) {
  const [banner, setBanner] = useState([])
  const obj = config()
  const banners = obj.banners.filter((e) => e.name === acronym)
  console.log(banners, 'banners')
  if (banners[0].type === 'local') {
    useEffect(() => {
      (async () => {
        const a = await fetch(banners[0].url)
        const f = await (a).arrayBuffer()
        const wb = read(f)
        const ws = wb.Sheets[wb.SheetNames[0]]
        const data = utils.sheet_to_json(ws)
        console.log(data)
        setBanner(data) // update state
      })()
    }, [])
  }
  console.log(banner)
  return banner
}
