export function removeLocation (text, acronym) {
  const ac = '/' + acronym
  const LowerCase = text?.toLowerCase() || ''
  const remplace = LowerCase.replace('/', '')
  const remplace2 = remplace.replace(ac, '')
  return remplace2.trim()
}
