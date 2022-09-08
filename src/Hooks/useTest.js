import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'

const url = 'https://anheuserbuschinbev-my.sharepoint.com/:x:/g/personal/katherine_velasquez_cerchile_cl/EUGHQIZJDidJmjPrSW0rwpgBthrot2sudnSYkA8u7zivdg?e=legp8v'

export function useTest () {
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  useEffect(() => {
    (async () => {
      const wb = read(await (await fetch(url)).arrayBuffer(), { WTF: 1 })

      /* use sheet_to_json with header: 1 to generate an array of arrays */
      const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 })

      /* see react-data-grid docs to understand the shape of the expected data */
      setColumns(data[0].map((r) => ({ key: r, name: r })))
      setRows(data.slice(1).map((r) => r.reduce((acc, x, i) => {
        acc[data[0][i]] = x
        return acc
      }, {})))
    })()
  })
  console.log(columns)
  console.log(rows)
  return { me: 'hole' }
}
