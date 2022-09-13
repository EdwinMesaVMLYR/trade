import React from 'react'
import { Header, Footer } from '../Components/index'
import PropTypes from 'prop-types'
function Layout ({ children }) {
  // const [isPyramid, setIsPyramid] = useState(false)
  return (
    <>
      <Header />
        <main className="main">
          {children}
        </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
