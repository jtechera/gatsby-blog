import React from "react"
import Header from '../components/Header'
import { graphql, Link } from "gatsby";

const SingleTagTemplate = ({data, pageContext}) => {
    const { posts, tagName } = pageContext
    return (
        <div>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'arial'
            }}>
            <h2>
                Posts about {`${tagName}`}
            </h2>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SingleTagTemplate