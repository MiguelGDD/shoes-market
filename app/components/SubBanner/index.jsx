import Image from "next/image"
import React from "react"
import Button from "../Button/index"

const index = ({ image, header, title, subTitle, buttonText }) => {
  return (
    <section>
      <h1 className="mb-6 font-medium text-[23px]">{header}</h1>
      {image && <Image src={image} width={1344} height={700} quality={100} alt={`${header} title`} />}
      <div className="flex flex-col text-center mx-auto mt-14">
        <h1 className="font-medium text-[56px] uppercase">{title}</h1>
        <span className="text-[15px] mt-3 px-3">{subTitle}</span>
        <div className="flex space-x-[5px] items-center justify-center mt-[30px]">
          <Button title={buttonText} />
        </div>
      </div>
    </section>
  )
}

export default index