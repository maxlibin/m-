import React from "react"
import {Link} from "gatsby"

import Social from "./social"
import ThemeToggle from "./toggler"

type link = {
  label: string
  href: string
}

const links: Array<link> = [
  {label: "Home", href: "/"},
  {label: "Blog", href: "/blog"},
]

const Header = () =>
  <div className="py-4 flex items-center mb-4">
    <ul className="flex space-x-4">
      {
        links.map(({href, label}) => (
          <li key={label} className="text-gray hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500">
            <Link to={href}> {label} </Link>
          </li>
        ))
      }
    </ul>
    <div className="ml-auto flex space-x-4 items-center">
      <Social />
      <ThemeToggle />
    </div>
  </div>

export default Header;
