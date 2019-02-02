import React from 'react'
import { Normalize } from 'styled-normalize'
import PropTypes from 'prop-types'
import Container from '../atoms/Container'
import { Helmet } from 'react-helmet'

export const Layout = props => (
  <>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <Container>
      <Normalize />
      <header>
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </Container>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout
