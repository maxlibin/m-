import React, {useEffect} from "react"
import {Link} from "gatsby"

const Social = () => {
  const [repos, setRepos] = React.useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/maxlibin/repos")
      .then(response => response.json())
      .then(setRepos)
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Github repos</h2>
      <div className="w-full overflow-auto pb-4">
        <div className="flex space-x-4">
          {
            repos.map(({name, html_url, description, language, updated_at}) => (
              <div className="bg-gradient-to-r from-indigo-400 via-green-500 to-pink-500 rounded min-w-[380px] flex" key={name}>
                <div className="bg-white dark:bg-gray-900 m-[2px] flex flex-col p-4 flex-grow max-w-[calc(100%-4px)]">
                  <Link
                    className="text-indigo-700 font-semibold dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
                    to={html_url}
                  >
                    {name}
                  </Link>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm truncate">{description}</p>
                  <div className="mt-auto text-gray-600 dark:text-gray-400 pt-8 text-sm flex items-center">
                    <span>
                      {language}
                    </span>
                    <span className="ml-auto text-xs">
                      <span className="text-gray-500/[.5] dark:text-gray-400/[.5] text-xs">
                        Updated on:{` `}
                      </span>
                      {new Date(updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Social;
