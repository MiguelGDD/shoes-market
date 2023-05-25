import Hero from "./components/Hero/index"
import Rows from "./components/Rows/index"
import Ad from "./components/Ad/index"
import SubBanner from "./components/SubBanner/index"
import featuredBanner from "../public/featured-banner.png"
import dontMissBanner from "../public/dont-miss-banner.png"
import { bestShoes } from "../mocks/bestShoes"
import { gearUp } from "../mocks/gearUp"

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      <Ad />
      <div className="space-y-[84px] flex flex-col max-w-[1344px] mx-auto px-12 pb-10">
        <Hero />
        <Rows rowsData={bestShoes} />
        <SubBanner
          image={featuredBanner}
          header={"Featured"}
          title={"STEP INTO WHAT FEELS GOOD"}
          subTitle={"Cause everyone should know the feeling of running in that perfect pair."}
          buttonText={"Find Your Shoe"}
        />
        <Rows rowsData={gearUp} />
        <SubBanner
          image={dontMissBanner}
          header={"Don't Miss"}
          title={"FLIGHT ESSENTIALS"}
          subTitle={"Your built-to-last, all-week wears—but with style only Jordan Brand can deliver."}
          buttonText={"Shop"}
        />
      </div>
    </main>
  )
}
