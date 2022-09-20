import { useGetData, useValuesEmpty } from './index'
import config from '../xlsx/config'

export function useUsers (acronym) {
  const obj = config()
  const arrayAcronym = obj.filter((e) => e.name === acronym)
  const dataReview = useValuesEmpty(arrayAcronym)
  const users = useGetData(dataReview[0].users, false, acronym)// False:  this array dont need treating
  return users
}
