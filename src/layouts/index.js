import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Helmet from 'react-helmet'
import frosmo from '../../frosmo-config'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Helmet>
          <script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
          <script type="text/javascript" charset="utf-8" src={frosmo.script}></script>
          <script type="text/javascript" charset="utf-8" src={frosmo.origin}></script>
        </Helmet>
        <Navigation />
        {children()}
      </Container>
    )
  }
}

export default Template
