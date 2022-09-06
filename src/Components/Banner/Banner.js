import React from 'react'
import { string } from 'prop-types'
import BannerItem from './BannerItem/BannerItem'

function Banner ({ bannerItem }) {
  return (
    <BannerItem bannerItem={bannerItem}/>
  )
}

Banner.propTypes = {
  bannerItem: string.isRequired
}

export default Banner
