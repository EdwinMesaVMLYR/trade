import { sha256 } from 'crypto-hash'

export async function useCookieValidate (acronym) {
  const a = await sha256(acronym)
  let value = ''
  document.cookie.replace(/(?:(?:^|.*;\s*)tradeopen\s*\s*([^;]*).*$)|^.*$/, '$1') === `=${a}` ? value = true : value = false
  return value
}
