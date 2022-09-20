export const useListSelect = (arraylist, value) => {
  const auxArray = []
  if (value === 'brand') {
    arraylist.map((lis) => auxArray.push(lis.marca))
  } else if (value === 'category') {
    arraylist.map((lis) => auxArray.push(lis.categoria))
  }
  const listSelect = [...new Set(auxArray)]
  return listSelect
}
