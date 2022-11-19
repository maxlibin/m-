import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import {SEO} from "../components/seo"
import LatestPosts from "../components/latestPosts"

const Index = ({data}) =>
  <Layout>
    <div className="mt-8">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white pt-8 inline-block">@maxlibin</h1>
      <p className="text-gray-600 dark:text-gray-400 py-2">I am based in Singapore, have Javascript, React, ReasonMl, ReasonReact projects you'd like to discuss?</p>
      <LatestPosts data={data} />
    </div>
  </Layout>

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

export const Head = () => <SEO />
