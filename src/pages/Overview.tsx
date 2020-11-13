import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from '../GlobalStyle'
import MondrianSimplified from '../components/MondrianSimplified'
import {Mondrian} from '../types'

type AppProps = {
  pageContext: {
    mondrianList: Mondrian[]
  }
}

export default function App({pageContext: {mondrianList}}: AppProps) {
  return (
    <Main>
      <h1>mondrian 1920-1937</h1>
      <GlobalStyle />
      {mondrianList.map((mondrian) => (
        <MondrianLink key={mondrian.id} href={`/${mondrian.id}`}>
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
