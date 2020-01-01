import React from "react"
import Post from "../container/post-container"
import { useStaticQuery, graphql } from "gatsby"

export default ({ not_read, filted }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                    title
                    }
                }
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    edges {
                        node {
                            id
                            excerpt
                            fields {
                                slug
                            }
                            frontmatter {
                                date(formatString: "MMMM DD, YYYY")
                                title
                                description
                            }
                        }
                    }
                }
            }
        `
    )
    return (
        <div>
            <select onChange={ (e) => { not_read(e.target.value) } }>
                {filted ? (
                    <>
                    <option value="NOT_SELECTED">すべて</option>
                    <option value="SELECTED_FILTER" selected>未読のみ</option>
                    </>
                ) : (
                    <>
                    <option value="NOT_SELECTED" selected>すべて</option>
                    <option value="SELECTED_FILTER">未読のみ</option>
                    </>
                )}
            </select>
            {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                <Post node={node} readFilter={filted} key={node.fields.slug} />
                )
            })}
        </div>
    )
}