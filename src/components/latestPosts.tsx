import React from "react"
import {Link} from "gatsby"

type node = {
  date: string,
  slug: string,
  title: string
}

type post = {
  data: {
    nodes: Array<node>
  }
}

const LatestPosts = ({data}: post) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Latest posts</h2>
      <ul>
        {
          data.nodes.map(({slug, title, date}) => (
            <li className="pb-2" key={slug}>
              <Link to={slug}>
                <span className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-500">
                  {title}
                  <span className="text-xs text-gray-700 dark:text-gray-500 ml-2">{date}</span>
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="mt-4">
        <Link to="/blog" className="text-indigo-700 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400">View all posts →</Link>
      </div>
    </div>
  )
}

export default LatestPosts
