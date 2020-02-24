import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { getFunc } from "../modules/post-state"

export default class Post extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    getFunc()
      .then(res => {
        this.setState({ reads: res })
      });
  }

  render() {
    const { node, reads, already_read, readFilter } = this.props
    return (
      <div>
        {console.log(readFilter)}
        {reads.includes(node.id) ? (
          (readFilter) ? (
            <article key={node.fields.slug}>
            </article>
          ) : (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug} onClick={ () => { already_read(node.id) } }>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}{` `}既読</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        ) : (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug} onClick={ () => { already_read(node.id) } }>
                  {node.frontmatter.title || node.fields.slug}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )}
      </div>
    )
  }
}