import React from "react"
import Cards from "../Cards/index"

const index = ({ rowsData }) => {

  const { title, arrowTitle, shoes } = rowsData

  return (
    <setion>
      <div className="w-full flex justify-between">
        {title ?
          <h1 className="text-[23px] font-medium">
            {title}
          </h1> 
          : 
          <div />
        }
        <div className="flex items-center space-x-4">
          <span className="text-[15px] font-medium">{arrowTitle}</span>
          <div className="flex space-x-3">
            <span className="w-12 h-12 bg-gray-200 rounded-full"></span>
            <span className="w-12 h-12 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-3">
        {shoes.map(({shoesTitle, gender, price, image}, index) => (
          <Cards
            key={`${index}-${title}`}
            title={shoesTitle}
            img={image}
            gender={gender}
            price={price} />
        ))}
      </div>
    </setion>
  )
}

export default index