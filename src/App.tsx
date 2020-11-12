import React from 'react'
import styled from 'styled-components'
import MondrianSimplified from './MondrianSimplified'
import {Mondrian} from './types'
import example from '../example.json'

export default function App() {
  return (
    <Main>
      <MondrianSimplified mondrian={(example as unknown) as Mondrian} />
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
