import React from 'react'
import BannerItem from './BannerItem/BannerItem'

function Banner () {
  const listClass = {
    main: 'main'
  }
  return (
    <div className={listClass.main}>
        <BannerItem />
    </div>
  )
}

export default Banner
