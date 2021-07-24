import React, { Component } from "react"
import { css } from "glamor"
import { description } from "../Const"

import Logo from "../components/Logo"

const Styles = {
  header: css({
    width: "100%",
    padding: "100px 0 80px 0",
  }),

  block: css({
    display: "block",
  }),

  about: css({
    marginBottom: "0",
  }),

  symbol: css({
    fontWeight: 400,
    opacity: 0.2,
    fontSize: 24,
  }),

  social: css({
    display: "flex",
    listStyle: "none",
    margin: "0 0 80px 0",
    padding: 0,

    "> li": {
      margin: "0 10px",
      opacity: 0.9,

      ":first-child": {
        marginLeft: 0,
      },
    },
  }),
}

class Header extends Component {
  render() {
    return (
      <>
        <div className={Styles.header}>
          <div className={Styles.container}>
            <a href="/">
              <h1>
                <span className={Styles.block}>
                  <span className={Styles.symbol}>&lt;</span>
                  Hi
                  <span className={Styles.symbol}>/&gt;</span>
                </span>
                <span className={Styles.block}>
                  I am <Logo />,
                </span>
                <span className={Styles.block}>Frontend developer</span>
              </h1>
            </a>
          </div>
        </div>
        <h2 className={Styles.about}>About:</h2>
        <p>{description}</p>
        <ul className={Styles.social}>
          <li>
            <a
              href="mailTo:me@maxlibin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              @
            </a>
          </li>
          <li>
            <a
              href="https://sg.linkedin.com/in/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </li>
        </ul>

        <h2>Sharing my experience and things I have learned:</h2>
      </>
    )
  }
}

export default Header
