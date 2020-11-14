import React from 'react'
import {Helmet} from 'react-helmet'

type HeadProps = {
  title: string
  description: string
  path?: string
}

export default function Head({title, description, path = ''}: HeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://mondrian.work${path}`} />
    </Helmet>
  )
}
