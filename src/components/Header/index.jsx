import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class Header extends React.Component {
  render() {
    const { location } = this.props
    const {
      title,
      menu,
    } = this.props.data.site.siteMetadata

    const isHomePage = get(location, 'pathname', '/') === '/'

    return (
      <div className="header">
        <div className="header__inner">
	  <nav className="header__inner-nav">
     	    <Link className="header__inner-title" to="/">{title}</Link>
	    <Menu data={menu} />
	  </nav>
        </div>
      </div>
    )
  }
}

export default Header
