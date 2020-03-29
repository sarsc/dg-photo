// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import './style.scss'

// const ImageData = () => {
//   return (
//     <StaticQuery
//       query={
//         graphql`
//           query ImageQuery {
//             allFile(filter: {name: {regex: "/img/"}}) {
//               edges {
//                 node {
//                   base
//                   childImageSharp {
//                     fluid(maxWidth: 500) {
//                       base64
//                       sizes
//                       src
//                       srcSet
//                       aspectRatio
//                     }
//                   }
//                 }
//               }
//             }
//           }
//       `
//       }
//       render={ data => (
//         <div>
//           {data.allFile.edges.map(({ node }) => (
//             <Img fluid={node.childImageSharp.fluid} alt="" className="imageSize" />
//           )
//           )}
//         </div>
//         )
//       }
//     />
//   )
// }


// export default ImageData
// export const data = graphql`
//     query ImageQuery {
//       allFile(filter: {name: {regex: "/img/"}}) {
//         edges {
//           node {
//             base
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 base64
//                 sizes
//                 src
//                 srcSet
//                 aspectRatio
//               }
//             }
//           }
//         }
//       }
//     }
// `
