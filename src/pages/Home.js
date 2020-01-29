import React from 'react'
import { graphql } from 'gatsby'
 const HomePage = ({data}) => {
  return (
    <div>
     Hello!
     {console.log(data)}
     {data.site.siteMetadata.title}
    </div>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default HomePage
