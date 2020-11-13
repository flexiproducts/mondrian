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
      <MondrianContainer>
        <MondrianSimplified mondrian={mondrian} />
      </MondrianContainer>
    </Main>
  )
}

const MondrianContainer = styled.div`
  height: 95vh;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`
