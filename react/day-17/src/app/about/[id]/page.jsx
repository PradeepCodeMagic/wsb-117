"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    let routes=useParams()
    console.log(routes.id)
  return (
    <div>
      hello product details page
    </div>
  )
}
