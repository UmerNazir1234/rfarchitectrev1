import React from 'react'
import { caseStudies } from '@/data/caseStudies'
const page = () => {
  console.log(caseStudies)
  return (
    <div><pre>{JSON.stringify(caseStudies, null, 2)}</pre></div>
  )
}

export default page