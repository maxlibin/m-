import React from "react"
import {Link} from "gatsby"

import ThemeToggle from "./toggler"

type link = {
  label: string
  href: string
}

const links: Array<link> = [
  {label: "Home", href: "/"},
  {label: "Blog", href: "/blog"},
  {label: "About", href: "/about"},
]

export default function Layout() {
  return (
    <div className="py-4 flex items-center mb-4">
      <ul className="flex space-x-4">
        {
          links.map((link) => (
            <li className="text-gray hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500">
              <Link to={link.href}> {link.label} </Link>
            </li>
          ))
        }
      </ul>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  )
}
