import React from 'react'
import { string, oneOfType, object } from 'prop-types'
import { removeCommas } from '../../../utils'

function BannerItem ({ bannerItem }) {
  const { linkskubaner, urlbackground, atributos, color, origen, ritual, Estilo, abv, ibu } = bannerItem
  return (
    <>
      <div className='banner 2xl:max-w-screen-2xl mx-auto'>
        <div className='banner--content'>
          <div className='banner--content__image'>
            {urlbackground && <img src={urlbackground} alt="image aca" className='banner--content__image--background' />}
          </div>
          <div className='banner--content__body'>
            <div className='banner--content__left'>
            {linkskubaner && <img src={linkskubaner} alt="image aca" className='banner--content__right--image' />}
          </div>
          <div className='banner--content__right'>
            <div className='card--banner'>
              {atributos && (<div className='card--banner__header'>
                <div className='card--banner__header--info'>
                  <span className='card--banner__header--info--text'>ATRIBUTOS</span>
                </div>
                <div className='card--banner__header--detail'>
                  <h2 className='card--banner__header--detail--text'>{atributos}</h2>
                </div>
              </div>)}
              <div className='card--banner__body'>
                <div className='card--banner__body--info'>
                  <p className='card--banner__body--info--text'>ARGUMENTO DE VENTA</p>
                </div>
                <div className='card--banner__body--details'>
                  {abv && <div className='card--banner__body--details--left'>
                     <h3 className='card--banner__body--dl--points'>
                      {removeCommas(abv)}
                    </h3>
                    <span className='card--banner__body--dl--desc'>
                      PUNTOS DEL MERCADO
                    </span>
                  </div>}
                  <div className='card--banner__body--details--center'>
                    {color && <span className='card--banner__body--dc-data'>Color: {color}</span>}
                    {Estilo && <span className='card--banner__body--dc-data'>Estilo: {Estilo}</span>}
                    {origen && <span className='card--banner__body--dc-data'>Origen: {origen}</span>}
                  </div>
                  <div className='card--banner__body--details--right'>
                    {abv && <span className='card--banner__body--dr-data'>ABV: {abv}</span>}
                    {ritual && <span className='card--banner__body--dr-data'>Ritual: {ritual}</span>}
                    {ibu && <span className='card--banner__body--dr-data'>IBU: {ibu}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

BannerItem.propTypes = {
  bannerItem: oneOfType([object, string])

}

export default BannerItem
