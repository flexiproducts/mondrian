import React from 'react'
import styled from 'styled-components'
import {Color, Mondrian} from '../types'

type MondrianSimplifiedProps = {
  mondrian: Mondrian
}

export default function MondrianSimplified({
  mondrian
}: MondrianSimplifiedProps) {
  return (
    <SvgOuter
      version="1.1"
      baseProfile="full"
      viewBox={`0 0 ${mondrian.width} ${mondrian.height}`}
    >
      {mondrian.rectangles.map((rectangle, index) => (
        <rect
          key={index}
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

const colors: Record<Color, string> = {
  black: '#000407',
  white: '#EEEDED',
  red: 'rgb(238, 21, 31)',
  yellow: 'rgb(255, 243, 0)',
  blue: 'rgb(0, 102, 181)'
}

const SvgOuter = styled.svg`
  height: 100%;
  max-width: 100%;
`
