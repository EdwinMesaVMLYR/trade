import { array, func, string, oneOfType, object } from 'prop-types'
import { removeCapitalSpace } from '../../utils'
function Select (props) {
  const { handleChange, selected, productsMarca } = props
  return (
    <div className='filter-content--filter'>
      <select className='filter-content--filter__select' name="select" value={selected} onChange={handleChange}>
        <option className='filter-content--filter__option' value='all' defaultValue>Todas las marcas</option>
        {productsMarca.map((cat, i) => <option className='filter-content--filter__option' value={removeCapitalSpace(cat)} key={i}>{cat}</option>)}
      </select>
    </div>
  )
}

Select.propTypes = {
  handleChange: func.isRequired,
  selected: oneOfType([object, string]),
  productsMarca: array.isRequired
}

export default Select
