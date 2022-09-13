export function removeCapitalSpace (text) {
  const LowerCase = text?.toLowerCase() || ''
  const remplace = LowerCase.replace('ñ', 'n')
  const remplace2 = remplace.replace(',', '')
  const remplace3 = remplace2.replace(',', '')
  const empty = remplace3.replace(/\s+/g, '')
  return empty.trim()
}
