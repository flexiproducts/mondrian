import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'
import {withPrefix} from 'gatsby'
import Head from '../components/Head'

type AppProps = {
  pageContext: {
    mondrian: Mondrian
  }
  location: {
    pathname: string
  }
}

// location

export default function App({location, pageContext: {mondrian}}: AppProps) {
  const title = `Piet Mondrian: 
  ${mondrian.description
    .slice('Piet Mondriaan\n         \n\n    '.length)
    .substring(0, 45)}`

  const description = `${mondrian.description} ${mondrian.id} ${mondrian.year}`
  return (
    <Main>
      <Head title={title} description={description} path={location.pathname} />
      <GlobalStyle />
      <MondrianContainer href={withPrefix('/')}>
        <MondrianSimplified mondrian={mondrian} />
      </MondrianContainer>
    </Main>
  )
}

const MondrianContainer = styled.a`
  display: flex;
  height: 95vh;
  width: 95vw;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`
