import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Headerbar from '../../components/headerbar/headerbar'

function Template1({ children }: React.PropsWithChildren) {
  console.log('template1')
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px] ">
        <Headerbar />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Template1