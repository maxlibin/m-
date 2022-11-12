import {graphql, useStaticQuery} from "gatsby"

interface siteMetadata {
  title: string;
  description: string;
  twitterUsername: string;
  image: string;
  siteUrl: string;
}

export const useSiteMetadata = (): siteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
