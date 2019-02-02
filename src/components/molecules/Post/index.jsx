import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../atoms/Avatar'
import Card from '../../atoms/Card'
import CardContent from '../../atoms/CardContent'

export const Post = ({ image, title, frontmatter, html }) => (
  <Card>
    <Avatar src={image} alt={title} size='64px' />
    <CardContent>
      <small>{frontmatter.date}</small>
      <div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </CardContent>
  </Card>
)

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  frontmatter:PropTypes.shape({
    date: PropTypes.string
  }),
  html: PropTypes.string
}

export default Post
