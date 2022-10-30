import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"

type node = {
  date: string,
  excerpt: string,
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

const Blog = ({data}: post) => {
  return (
    <Layout>
      <div className="mt-8">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white py-8">@maxlibin - blog</h1>
        {data.allWpPost.nodes.map(({slug, title, excerpt, date}) => (
          <div className="mt-10 text-gray-900 dark:text-gray-300 text-xl md:max-w-4xl" key={slug}>
            <div className="text-xs text-gray-700 dark:text-gray-500">{date}</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-indigo-500 dark:hover:text-indigo-700">
              <Link to={`/${slug}`}>
                {title}
              </Link>
            </h3>
            <div className="mb-4 flex h-1 w-[calc(100%+4rem)] bg-gradient-to-r from-indigo-400 via-green-500 to-pink-500 sm:mx-0 sm:w-full"></div>
            <div className="text-xl text-gray-900 dark:text-gray-400 mb-2" dangerouslySetInnerHTML={{__html: excerpt}} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        date
        slug
      }
    }
  }
`

export default Blog;
