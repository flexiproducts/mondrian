export type Mondrian = {
  id: string
  title: string
  width: number
  height: number
  description: string
  year: string
  date: string
  publicDomain: boolean
  database: string
  rectangles: {
    x: number
    y: number
    width: number
    height: number
    color_id: Color
    color: [number, number, number]
  }[]
}

export type Color = 'black' | 'white' | 'red' | 'yellow' | 'blue'
