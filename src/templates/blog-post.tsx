import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

type node = {
  content: string,
  date: string,
  title: string
}

type post = {
  data: {
    allWpPost: {
      nodes: Array<node>
    }
  }
}

const BlogPost = ({data}: post) => {
  const {allWpPost: {nodes: [{title, content, date}]}} = data;

  return (
    <Layout>
      <div className="post">
        <div className="text-xs text-gray-700 dark:text-gray-500 py-8">
          <div className="text-xs text-gray-700 dark:text-gray-500 mb-2">{date}</div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">{title}</h1>
        </div>
        <div className="-mx-8 my-2 flex h-1 w-[calc(100%+4rem)] bg-gradient-to-r from-indigo-400 via-green-500 to-pink-500 sm:mx-0 sm:w-full"></div>
        <div className="mt-8 text-gray-900 dark:text-gray-300 text-xl md:max-w-4xl" dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        content
      }
    }
  }
`

export default BlogPost;
