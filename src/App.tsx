import React from 'react'
import styled from 'styled-components'
import mondrian from '../example.json'

export default function App() {
  return (
    <Main>
      <Painting />
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`

function Painting() {
  return (
    <SvgOuter
      version="1.1"
      baseProfile="full"
      width={mondrian.width}
      height={mondrian.height}
    >
      {mondrian.rectangles.map((rectangle) => (
        <rect
          key={rectangle.index}
          x={rectangle.x}
          y={rectangle.y}
          height={rectangle.height}
          width={rectangle.width}
          fill={rectangle.color_id}
          stroke={'black'}
          strokeWidth="10"
        ></rect>
      ))}
    </SvgOuter>
  )
}

const SvgOuter = styled.svg`
  overflow: visible;
  padding: 5px;
  margin: 20px 0px;
`
