import React from 'react'
import styled from 'styled-components'
import MondrianSimplified from './MondrianSimplified'
import {Mondrian} from './types'

type AppProps = {
  pageContext: {
    mondrianList: Mondrian[]
  }
}

export default function App({pageContext: {mondrianList}}: AppProps) {
  return (
    <Main>
      {mondrianList.map((mondrian) => (
        <MondrianThumbnail key={mondrian.id} mondrian={mondrian} />
      ))}
    </Main>
  )
}

const MondrianThumbnail = styled(MondrianSimplified)`
  width: 100px;
`

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
  color: #242422;
  font-size: 75px;
`
