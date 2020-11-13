import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import MondrianSimplified from './MondrianSimplified'
import {Mondrian} from './types'

type AppProps = {
  pageContext: {
    mondrian: Mondrian
  }
}

export default function App({pageContext: {mondrian}}: AppProps) {
  return (
    <Main>
      <GlobalStyle />
      <MondrianSimplified mondrian={mondrian} />
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`

const GlobalStyle = createGlobalStyle`
    html, body, #___gatsby, #gatsby-focus-wrapper {
      background-color:  #eeeee4;;
      margin: 0;
      height: 100vh;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
    }
`
