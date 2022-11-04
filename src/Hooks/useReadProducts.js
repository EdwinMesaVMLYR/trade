import { useGetData, useValuesEmpty } from './index'
import config from '../xlsx/config'

export function useReadProducts (acronym) {
  const obj = config()
  const arrayAcronym = obj.filter((e) => e.name === acronym)
  const dataReview = useValuesEmpty(arrayAcronym)
  const products = useGetData(dataReview[0].products, true, acronym)
  return products
}
