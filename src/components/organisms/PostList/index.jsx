import React from 'react'
import PostPreview from '../../molecules/PostPreview'

export const PostList = ({ data }) => (
  <>
    {data.map((post, i) => (
      <PostPreview
        key={i}
        title={post.node.frontmatter.title}
        image={post.node.frontmatter.image}
        excerpt={post.node.excerpt}
        slug={post.node.fields.slug}
      />
    ))}
  </>
)

export default PostList
