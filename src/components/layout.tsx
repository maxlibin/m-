import React from "react"

import Header from "./header"

const Layout = ({children}) =>
  <div className="h-full overflow-auto bg-white dark:bg-gray-900 px-4">
    <div className="container max-w-6xl mx-auto">
      <Header />
      {children}
    </div>
  </div>

export default Layout;
