import React from 'react'
import { string } from 'prop-types'
import imageBottleBanner from '../../../images/bottle-banner.png'

function BannerItem ({ bannerItem }) {
  const { ABV } = bannerItem
  return (
    <>
      <div className='banner 2xl:max-w-screen-2xl mx-auto'>
        <div className='banner--content'>
          <div className='banner--content__left'>
            <img src={imageBottleBanner} alt="image aca" className='banner--content__right--image' />
          </div>
          <div className='banner--content__right'>
            <div className='card--banner'>
              <div className='card--banner__header'>
                <div className='card--banner__header--info'>
                  <span className='card--banner__header--info--text'>ATRIBUTOS</span>
                </div>
                <div className='card--banner__header--detail'>
                  <h2 className='card--banner__header--detail--text'># 1 MARCA MÁS VALORADA EN CHILE</h2>
                </div>
              </div>
              <div className='card--banner__body'>
                <div className='card--banner__body--info'>
                  <p className='card--banner__body--info--text'>ARGUMENTO DE VENTA</p>
                </div>
                <div className='card--banner__body--details'>
                  <div className='card--banner__body--details--left'>
                    <h3 className='card--banner__body--dl--points'>
                      {ABV}
                    </h3>
                    <span className='card--banner__body--dl--desc'>
                      PUNTOS DEL MERCADO
                    </span>
                  </div>
                  <div className='card--banner__body--details--center'>
                    <span className='card--banner__body--dc-data'>Color: Dorado</span>
                    <span className='card--banner__body--dc-data'>Estilo: Lager</span>
                    <span className='card--banner__body--dc-data'>Origen: México</span>
                  </div>
                  <div className='card--banner__body--details--right'>
                    <span className='card--banner__body--dr-data'>ABV: {ABV}</span>
                    <span className='card--banner__body--dr-data'>Ritual: Lima</span>
                    <span className='card--banner__body--dr-data'>IBU: 19</span>
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
  bannerItem: string.isRequired
}

export default BannerItem
