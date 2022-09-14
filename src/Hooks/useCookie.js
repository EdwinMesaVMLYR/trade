export function useCookie () {
  const date = new Date()
  date.setTime(date.getTime() + (180 * 60 * 1000))
  const expires = '; expires=' + date.toGMTString()
  document.cookie = 'loginopen' + '=' + 'istruelogin' + expires + '; path=/'
}
