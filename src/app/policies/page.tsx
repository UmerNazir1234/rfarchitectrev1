import { permanentRedirect } from 'next/navigation'
import React from 'react'

const page = () => {
  permanentRedirect('/')
}

export default page