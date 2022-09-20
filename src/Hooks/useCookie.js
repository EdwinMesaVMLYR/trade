import { sha256 } from 'crypto-hash'

export async function useCookie (acronym, email) {
  const date = new Date()
  const a = await sha256(acronym)
  console.log(a)
  date.setTime(date.getTime() + (180 * 60 * 1000))
  const expires = '; expires=' + date.toGMTString()
  document.cookie = 'tradeopen' + '=' + a + expires + '; path=/'
}
