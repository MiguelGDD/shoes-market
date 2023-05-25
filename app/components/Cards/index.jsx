import Image from "next/image"
import React from "react"

const Index = ({ title, gender, price, img }) => {
    
  return (
    <div className="h-[530px] w-[441px] flex flex-col">
      {img ? 
        <Image src={img} width={441} height={441} quality={100} alt={`${title} shoes image`} />
        :
        <div />
      }
      <div className="flex flex-col justify-between items-center my-auto">
        <div className="flex w-full justify-between">
          <h1 className="font-medium text-[15px]">
            {title}
          </h1>
          <span className="font-medium text-[15px]">
            {price}
          </span>
        </div>
        <span className="text-[15px] text-gray-400 justify-start items-start flex mr-auto">
          {gender}
        </span>
        
      </div>
    </div>
  )
}

export default Index