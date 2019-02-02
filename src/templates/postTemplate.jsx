import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
import Card from '../components/atoms/Card'
import CardContent from '../components/atoms/CardContent'

export default function PostTemplate ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <Card>
        <CardContent>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </CardContent>
      </Card>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.shape()
}
