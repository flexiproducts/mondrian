export type Mondrian = {
  id: string
  width: number
  height: number
  rectangles: {
    index: number
    x: number
    y: number
    width: number
    height: number
    color_id: Color
    color: [number, number, number]
  }[]
}

export type Color = 'black' | 'white' | 'red' | 'yellow' | 'blue'
