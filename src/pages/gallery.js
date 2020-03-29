import React from 'react'

import '../styles/main.scss'
import Image from '../components/image/Image'
import LeftSideContainer from '../components/LeftSideContainer'
import { graphql } from "gatsby"

class Gallery extends React.Component {

  render() {
    return (
      <div className="mainContainer">
        <LeftSideContainer />
        <Image imageList={this.props.data.allFile.edges}/>
      </div>
      )
  }
}
export default Gallery


export const data = graphql`
    query ImageQuery {
      allFile(filter: {name: {regex: "/img/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(fit: COVER) {
                base64
                sizes
                src
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    }
`
