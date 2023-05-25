import { navContent } from "../../../mocks/nav"
import Image from "next/image"
import React from "react"
import Logo from "../../../public/logo.png"

const index = () => {
  
  return (
    <nav className="w-full bg-white shadow-md fixed">
      <div className="px-12 h-[60px] mx-auto flex w-full justify-between items-center max-w-[1344px]">
        <Image src={Logo} width={58} height={20} alt={"Logo"} />
        <div className="">
          <ul className="flex space-x-4">
            {navContent.map(({title, path}, index) => 
              <li key={`${index}-${title}`} className="flex items-center">
                <a href={path || "#"} className="text-[15px] font-medium hover:border-b-2">{title}</a>
              </li>
            )}
          </ul>
        </div>
        <div className="flex space-x-4">
          <div className="">search</div>
          <div className="">❤</div>
          <div className="">🛒</div>
        </div>
      </div>
    </nav>
  )
}

export default index