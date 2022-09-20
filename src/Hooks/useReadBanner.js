import { useGetData, useValuesEmpty } from './index'
import config from '../xlsx/config'

export function useReadBanner (acronym) {
  const obj = config()
  const arrayAcronym = obj.filter((e) => e.name === acronym)
  const dataReview = useValuesEmpty(arrayAcronym)
  const banners = useGetData(dataReview[0].banner, true, false)
  return banners
}
