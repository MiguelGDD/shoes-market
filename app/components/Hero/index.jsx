import Image from "next/image"
import React from "react"
import HeroImg from "../../../public/hero.svg"
import Button from "../../components/Button/index"

const index = () => {
  return (
    <>
      <Image src={HeroImg} width={1344} height={700} quality={100} alt={"Hero img"} />
      <section className=" flex flex-col mx-auto text-center max-w-[570px] mt-14">
        <span className="text-[15px] font-medium">First Look</span>
        <h1 className="font-medium text-[56px] uppercase">Nike Air Max Pulse</h1>
        <p className="text-[15px] mt-3 px-3">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex space-x-[5px] items-center justify-center mt-[30px]">
          <Button title={"Shop Air Maxe"} />
        </div>
      </section>
    </>
  )
}

export default index