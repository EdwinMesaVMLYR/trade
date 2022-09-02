import React from 'react'
import { usePapaParse } from 'react-papaparse'

function Login () {
  const { readRemoteFile } = usePapaParse()
  const config = {
    delimiter: '',
    newline: '',
    quoteChar: '',
    escapeChar: '',
    header: true,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: '',
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    chunkSize: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined
  }
  console.log(config)
  const handleReadRemoteFile = () => {
    readRemoteFile('https://dev-site-andrespereira.pantheonsite.io/sites/default/files/2022-09/3.csv', {
      header: true,
      complete: (results) => {
        console.log('---------------------------')
        console.log('Results:', results.data)
        console.log('---------------------------')
      }
    })
  }
  console.log(handleReadRemoteFile())
  return (
    <div>reading</div>
  )
}
export default Login
