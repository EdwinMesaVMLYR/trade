import imgecatalogo from '../../images/catalogo.svg'

function headSelect ({ children }) {
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
          {children}
        </div>
      </div>
    </div>
  )
}
export default headSelect
