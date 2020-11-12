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
  align-items: center;
  height: 100%;
  color: #242422;
  font-size: 75px;
`

function Painting() {
  return (
    <SvgOuter
      version="1.1"
      baseProfile="full"
      viewBox={`0 0 ${mondrian.width} ${mondrian.height}`}
    >
      {mondrian.rectangles.map((rectangle) => (
        <rect
          key={rectangle.index}
          x={rectangle.x}
          y={rectangle.y}
          height={rectangle.height}
          width={rectangle.width}
          fill={colors[rectangle.color_id]}
          stroke={colors.black}
          strokeWidth="10"
        ></rect>
      ))}
    </SvgOuter>
  )
}

const colors = {
  black: '#000407',
  white: '#EEEDED',
  red: 'rgb(238, 21, 31)',
  yellow: 'rgb(255, 243, 0)',
  blue: 'rgb(0, 102, 181)'
}

const SvgOuter = styled.svg`
  overflow: visible;
  height: 95vh;
  padding: 5px;
`
