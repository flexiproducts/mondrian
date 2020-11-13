import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'
import {withPrefix} from 'gatsby'
import {Helmet} from 'react-helmet'

type AppProps = {
  pageContext: {
    mondrian: Mondrian
  }
}

export default function App({pageContext: {mondrian}}: AppProps) {
  return (
    <Main>
      <Helmet>
        <title>
          Piet Mondrian:{' '}
          {mondrian.description
            .slice('Piet Mondriaan\n         \n\n    '.length)
            .substring(0, 45)}
        </title>
        <meta
          name="description"
          content={`${mondrian.description} ${mondrian.id} ${mondrian.year}`}
        />
      </Helmet>
      <GlobalStyle />
      <MondrianContainer href={withPrefix('/')}>
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
