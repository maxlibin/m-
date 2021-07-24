import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "../styles/crayon.min.css"
import { title, description } from "../Const"
import { css } from "glamor"

css.global("html, body", {
  padding: 0,
  margin: 0,
  color: "#fff",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  letterSpacing: "1px",
  fontWeight: 100,
  backgroundColor: "#1d1b24",
})

css.global("body.fontLoaded", {
  fontFamily: "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
})

css.global("h1", {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "68px",
  fontWeight: 700,
  margin: 0,
  padding: 0,
})

css.global("body.fontLoaded h1", {
  fontFamily: "PT Sans",
})

css.global("h2", {
  fontSize: "20px",
  fontWeight: 300,
  marginBottom: "60px",
  color: "rgba(255,255,255,0.3)",
})

css.global("h3", {
  fontSize: "28px",
  fontWeight: 400,
  marginBottom: "28px",
  color: "rgba(255,255,255,0.8)",
})

css.global("a", {
  textDecoration: "none",
  color: "#fff",
})

css.global("a:hover", {
  color: "#FF6100",
})

css.global("p", {
  color: "rgba(255,255,255, 0.8)",
  fontSize: 19,
  lineHeight: 1.8,
})

css.global(".wp-block-image img", {
  maxWidth: "100%",
})

const Styles = {
  body: css({
    background: "#1d1b24",
  }),

  container: css({
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 20px",
    overflow: "auto",
    wordWrap: "break-word",
  }),
}

class DefaultLayout extends Component {
  render() {
    return (
      <div className={Styles.body}>
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description}></meta>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            name="google-site-verification"
            content="K3GpANMVg6pYaudsC9v6KzevMLnXhkJK_kaPtKc2imY"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=PT+Sans:700&amp;subset=latin-ext&display=swap"
            as="style"
            onload="this.onload=null; this.rel='stylesheet'; document.body.classList.add('fontLoaded')"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,400,700&display=swap"
            rel="preload"
            as="style"
            onload="this.onload=null; this.rel='stylesheet'; document.body.classList.add('fontLoaded')"
          />
        </Helmet>

        <div className={Styles.container}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default DefaultLayout
