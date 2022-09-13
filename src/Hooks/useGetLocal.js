/* import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

export function useGetLocal (url) {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const f = await fetch(url).arrayBuffer()
      const wb = read(f) // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      const d = utils.sheet_to_json(ws)
      setData(d)
    })()
  }, [])
  console.log(data)
  return data
}
 */
