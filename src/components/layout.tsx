import React from "react"
import Header from "./header"

export default function Layout({children}) {
  return (
    <div className="h-full bg-white dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
    </div>
  )
}
