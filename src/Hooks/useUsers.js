import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import config from '../xlsx/config'

export function useUsers (acronym) {
  const [users, setUsers] = useState([])
  const obj = config()
  const user = obj.filter((e) => e.name === acronym)
  if (user.length === 0) {
    window.location.href = '/404'
  }
  if (user[0].users[1] === 'local') {
    useEffect(() => {
      (async () => {
        const f = await (await fetch(user[0].users[0])).arrayBuffer()
        const wb = read(f)
        const ws = wb.Sheets[wb.SheetNames[0]]
        const data = utils.sheet_to_json(ws)
        setUsers(data)
      })()
    }, [])
  } else if (user[0].users[1] === 'rest') {
    useEffect(() => {
      fetch(user[0].users[0])
        .then(response => response.json())
        .catch((response) => {
          console.log(response.detail, response.statusText)
        })
        .then(data => setUsers(data))
    }, [])
  }
  return users
}
