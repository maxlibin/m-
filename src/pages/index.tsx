import React from "react"
import {graphql} from "gatsby"
import GitHubCalendar from "react-github-calendar";

import Layout from "../components/layout"
import {SEO} from "../components/seo"
import LatestPosts from "../components/latestPosts"
import GithubRepo from "../components/githubRepos"

const title = "@maxlibin"
const description = "I am based in Singapore, have Javascript, React, ReasonMl, Rescript, ReasonReact, RescriptReact projects you'd like to discuss?"

const Index = ({data}) => {
  return (
    <Layout>
      <div className="mt-8">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white pt-8 inline-block">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 py-2">{description}</p>
        <LatestPosts data={data.allWpPost} />
        <GithubRepo data={data.allGithubRepos} />
        <div className="mt-8">
          <GitHubCalendar username="maxlibin" blockSize={20} blockMargin={2} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(limit: 8, sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allGithubRepos {
      nodes {
        name
        html_url
        description
        language
        updated_at(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Index;

export const Head = () => <SEO />
