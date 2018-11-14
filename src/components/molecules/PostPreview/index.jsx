import React from 'react'
import Card from '../../atoms/Card'
import CardContent from '../../atoms/CardContent'
import Avatar from '../../atoms/Avatar'
import PropTypes from 'prop-types'
import Excerpt from '../../atoms/Excerpt'
import { Title } from '../../atoms/Title'

export const PostPreview = props => (
  <Card>
    <Avatar src={props.image} alt={props.title} size='64px' />
    <CardContent>
      <Title>{props.title}</Title>
      <Excerpt>{props.excerpt}</Excerpt>
    </CardContent>
  </Card>
)

PostPreview.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string
}

export default PostPreview
