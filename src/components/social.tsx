import React from "react"
import {AiOutlineGithub as GithubIcon, AiOutlineTwitter as TwitterIcon} from "react-icons/ai";

type social = {
  label: string,
  icon: React.ReactNode,
  href: string
}

const socials: Array<social> = [
  {label: "Twitter", icon: <TwitterIcon />, href: "https://twitter.com/maxlibin"},
  {label: "Github", icon: <GithubIcon />, href: "https://github.com/maxlibin"},
]

const Social = () =>
  <ul className="flex space-x-4 ml-auto pr-4 border-r">
    {
      socials.map(({href, label, icon}) => (
        <li
          key={label}
          className="text-gray hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500 text-xl"
          title={label}
        >
          <a href={href}> {icon} </a>
        </li>
      ))
    }
  </ul>

export default Social;
