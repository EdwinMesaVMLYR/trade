import { array, func, string, oneOfType, object } from 'prop-types'
import { removeCapitalSpace } from '../../utils'
import imgecatalogo from '../../images/catalogo.svg'
function Select (props) {
  const { handleChange, selected, productsMarca } = props
  return (
    <div className='filter-content 2xl:max-w-screen-xl mx-auto'>
      <div className='filter-content--header'>
        <div className='filter-content--header__image'>
          <img src={imgecatalogo} alt="image aca" className='filter-content--header__image--src' />
        </div>
        <div className='filter-content--header__title'>
          <h2 className='filter-content--header__title--text'>SPMK</h2>
          </div>
        <div className='filter-content--filter'>
          <select className='filter-content--filter__select' name="select" value={selected} onChange={handleChange}>
            <option className='filter-content--filter__option' value='all' defaultValue>Todas las marcas</option>
            {productsMarca.map((cat, i) => <option className='filter-content--filter__option' value={removeCapitalSpace(cat)} key={i}>{cat}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

Select.propTypes = {
  handleChange: func.isRequired,
  selected: oneOfType([object, string]),
  productsMarca: array.isRequired
}

export default Select
