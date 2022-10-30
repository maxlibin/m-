import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"

type node = {
  date: string,
  slug: string,
  title: string
}

type post = {
  data: {
    allWpPost: {
      nodes: Array<node>
    }
  }
}

const Index = ({data}: post) => {
  return (
    <Layout>
      <div className=" mt-8">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white pt-8 inline-block">@maxlibin</h1>
        <p className="text-gray-600 dark:text-gray-400 py-2">I am based in Singapore, have Javascript, React, ReasonMl, ReasonReact projects you'd like to discuss?</p>
        <div className="mt-6">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Latest posts</h2>
          <ul>
            {data.allWpPost.nodes.map(({slug, title, date}) => (
              <li className="py-1" key={slug}>
                <Link to={slug}>
                  <span className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-500">
                    {title}
                    <span className="text-xs text-gray-700 dark:text-gray-500 ml-2">{date}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(limit: 8, sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Index;
