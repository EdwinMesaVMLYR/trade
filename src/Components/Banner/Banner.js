import React from 'react'
import { object, oneOfType, string } from 'prop-types'
import BannerItem from './BannerItem/BannerItem'

function Banner ({ bannerItem }) {
  return (
    <BannerItem bannerItem={bannerItem}/>
  )
}

Banner.propTypes = {
  bannerItem: oneOfType([object, string])
}

export default Banner
