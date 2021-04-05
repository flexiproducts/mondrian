import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'
import Head from '../components/Head'

type AppProps = {
  pageContext: {
    mondrian: Mondrian
  }
  location: {
    pathname: string
  }
}

export default function App({location, pageContext: {mondrian}}: AppProps) {
  const title = `Piet Mondrian: ${mondrian?.title} (${mondrian.year})`

  const description = `${mondrian.description} ${mondrian.id} ${mondrian.year}`
  return (
    <Main>
      <Head title={title} description={description} path={location.pathname} />
      <GlobalStyle />
      <MondrianContainer>
        <MondrianSimplified mondrian={mondrian} />
      </MondrianContainer>
      <h1>
        {mondrian.title} ({mondrian.year})
      </h1>
      <Meta>
        <a href={mondrian.database} target="_blank" rel="noreferrer">
          See on rkd.nl
        </a>
      </Meta>
    </Main>
  )
}

const Meta = styled.div`
  position: absolute;
  left: 0;
  bottom : 0;
  margin: 8px;
`

const MondrianContainer = styled.div`
  margin: 16px;
  height: 85vh;
`

const Main = styled.div`
  display: flex;
  width: 95vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
