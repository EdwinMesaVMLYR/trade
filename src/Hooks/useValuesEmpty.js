export function useValuesEmpty (reviewArray) {
  if (reviewArray.length > 0) {
    return reviewArray
  } else {
    window.location.href = '/404'
  }
}
