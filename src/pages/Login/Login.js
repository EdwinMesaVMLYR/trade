import React from 'react'
import { usePapaParse } from 'react-papaparse'

function Login () {
  const { readRemoteFile } = usePapaParse()

  const handleReadRemoteFile = () => {
    readRemoteFile('https://react-papaparse.js.org/static/csv/normal.csv', {
      complete: (results) => {
        console.log('---------------------------')
        console.log('Results ssgit remote add origin git@github.com:EdwinMesaVMLYR/trade.git:', results)
        console.log('---------------------------')
      }
    })
  }

  return <button onClick={() => handleReadRemoteFile()}>readRemoteFile</button>
}
export default Login
