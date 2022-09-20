import { useState, useEffect } from 'react'
import { removeCapitalSpace } from '../utils'
import { read, utils } from 'xlsx'

const objectKeysTreating = function (objwt) {
  return Object.keys(objwt).reduce(function (newObj, key) {
    const val = objwt[key]
    const newVal = (typeof val === 'object') ? objectKeysTreating(val) : val
    newObj[key.replace(/\s+/g, '').toLowerCase().replace('ñ', 'n').replace('(', '').replace(')', '')] = newVal
    return newObj
  }, {})
}

export function useGetData (findArray, treating, acronym) {
  const [data, setData] = useState([])
  useEffect(() => {
    if (findArray[1] === 'local') {
      (async () => {
        const a = await fetch(findArray[0])
        const f = await (a).arrayBuffer()
        const wb = read(f)
        const ws = wb.Sheets[wb.SheetNames[0]]
        const d = utils.sheet_to_json(ws)
        if (treating) {
          const dwt = d.map((p) => ({ ...objectKeysTreating(p), keymain: removeCapitalSpace(p.MARCA), keycat: removeCapitalSpace(p.CATEGORIA) }))
          setData(dwt)
        } else if (treating === false) {
          const dwt = d.map((p) => ({ ...objectKeysTreating(p), trade: acronym }))
          setData(dwt)
        }
      })()
    } else if (findArray[1] === 'rest') {
      fetch(findArray[0])
        .then(response => response.json())
        .catch((response) => {
          console.log(response.detail, response.statusText)
        })
        .then(data => setData(data))
    }
  }, [])
  return data
}
