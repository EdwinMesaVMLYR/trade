export function removeCommas (text) {
  const remplace = text.replace(',', '.')
  return remplace.trim()
}
