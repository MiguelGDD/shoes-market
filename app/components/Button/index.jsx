"use client"
import React from "react"

const index = ({ title, callback = ()=> {} }) => {
  return (
    <button
      className="h-[39px] w-fit px-[22px] bg-black text-white rounded-[30px]"
      onClick={callback}
    >
      {title}
    </button>
  )
}

export default index