import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ node, reads, already_read, readFilter }) => (
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