export function removeLocation (text, acronym) {
  const ac = '/' + acronym
  const LowerCase = text?.toLowerCase() || ''
  const remplace = LowerCase.replace('/', '')
  const remplace2 = remplace.replace(ac, '')
  const remplace3 = remplace2.replace(',', '')
  const empty = remplace3.replace(/\s+/g, '')
  return empty.trim()
}
