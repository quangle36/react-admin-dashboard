import React from 'react'
import Headerbar from '../../components/headerbar/headerbar'

function Template2({ children }: React.PropsWithChildren) {
  console.log('template2')
  return (
    <div className="min-h-screen xl:flex">
     
      <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px] ">
        <Headerbar />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Template2