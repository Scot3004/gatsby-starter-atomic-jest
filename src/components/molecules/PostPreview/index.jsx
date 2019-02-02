import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Avatar from '../../atoms/Avatar'
import Card from '../../atoms/Card'
import CardContent from '../../atoms/CardContent'
import Excerpt from '../../atoms/Excerpt'
import Title from '../../atoms/Title'

export const PostPreview = props => (
  <Card>
    <Avatar src={props.image} alt={props.title} size='64px' />
    <CardContent>
      <Link to={props.slug}>
        <Title>{props.title}</Title>
      </Link>
      <Excerpt>{props.excerpt}</Excerpt>
    </CardContent>
  </Card>
)

PostPreview.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string
}

export default PostPreview
