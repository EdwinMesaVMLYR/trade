import { array, func, string, oneOfType, object } from 'prop-types'
import { removeCapitalSpace } from '../../utils'
function Select (props) {
  const { handleChange, selected, list, text } = props
  return (
    <select className='filter-content--filter__select' name="select" value={selected} onChange={handleChange}>
      <option className='filter-content--filter__option' value='all' defaultValue>{text}</option>
      {list.map((cat, i) => <option className='filter-content--filter__option' value={removeCapitalSpace(cat)} key={i}>{cat}</option>)}
    </select>
  )
}

Select.propTypes = {
  handleChange: func.isRequired,
  selected: oneOfType([object, string]),
  list: array.isRequired,
  text: string.isRequired
}

export default Select
