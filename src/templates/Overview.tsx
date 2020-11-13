import {withPrefix} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'
import {Helmet} from 'react-helmet'

type AppProps = {
  pageContext: {
    mondrianList: Mondrian[]
  }
}

export default function App({pageContext: {mondrianList}}: AppProps) {
  return (
    <Main>
      <Helmet>
        <title>Abstract Mondrian Paintings 1920-1937</title>
        <meta
          name="description"
          content="List of selected mondrian paintings in his most characteristic style from 1920 to 1937 in abstract representation"
        />
      </Helmet>
      <h1>mondrian 1920-1937</h1>
      <GlobalStyle />
      {mondrianList.map((mondrian) => (
        <MondrianLink key={mondrian.id} href={withPrefix(mondrian.id)}>
          <MondrianThumbnail mondrian={mondrian} />
        </MondrianLink>
      ))}
    </Main>
  )
}

const MondrianThumbnail = styled(MondrianSimplified)``

const MondrianLink = styled.a`
  display: flex;
  height: 200px;
  margin: 20px;
`

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  color: #242422;
  flex-wrap: wrap;
`
