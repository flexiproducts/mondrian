import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'

type AppProps = {
  pageContext: {
    mondrian: Mondrian
  }
}

export default function App({pageContext: {mondrian}}: AppProps) {
  return (
    <Main>
      <GlobalStyle />
      <MondrianContainer href="/mondrian">
        <MondrianSimplified mondrian={mondrian} />
      </MondrianContainer>
    </Main>
  )
}

const MondrianContainer = styled.a`
  display: block;
  height: 95vh;
  max-width: 95vw;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`
