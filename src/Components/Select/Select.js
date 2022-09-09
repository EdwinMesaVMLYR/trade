import { string, array, func } from 'prop-types'

function Select (props) {
  const { handleChange, selected, productsMarca } = props
  return (
    <div className='filter-content--filter'>
      <select className='filter-content--filter__select' name="select" value={selected} onChange={handleChange}>
        <option className='filter-content--filter__option' value='all' selected>Todas las marcas</option>
        {productsMarca.map((cat, i) => <option className='filter-content--filter__option' value={cat} key={i}>{cat}</option>)}
      </select>
    </div>
  )
}

Select.propTypes = {
  handleChange: func.isRequired,
  selected: string.isRequired,
  productsMarca: array.isRequired
}

export default Select
