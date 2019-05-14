import React from "react"
import Header from '../components/Header'
import { graphql, Link } from "gatsby";

const AllTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <div>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'arial'
            }}>
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/tags/${tagName}`}>
                                    {tagName}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AllTagsTemplate