export function removeCommas (text) {
  console.log(text)
  const remplace = text.replace(',', '.')
  return remplace.trim()
}
