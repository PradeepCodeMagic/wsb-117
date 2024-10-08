import React from 'react'
import Leftside from '../Leftside'

export default function layout({children}) {
    return (
        <div className="w-full grid grid-cols-[20%_auto] ">
            <div className="h-[400px] bg-red-400 "><Leftside /></div>
            <div className=""> {children}</div>
        </div>
    )
}
