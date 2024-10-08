import React from 'react'

export default function Main({children}) {
  return (
    <>
        <ContextApi>
            {children}
        </ContextApi>
    </>
  )
}
