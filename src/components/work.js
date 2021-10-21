import {useState} from 'react'
import Slider from 'react-slick'
import SliderStrip from '@/components/sliderStrip'
import SliderNav from '@/components/sliderNav'

function Work() {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const slider1 = s1 => setNav1(s1)
  const slider2 = s2 => setNav2(s2)

  return (
    <section
      id="work"
      className="h-screen w-full py-7/100 px-7/100 text-12 bg-secondary flex flex-col items-center gap-12"
    >
      <article className="topPos w-full flex flex-col items-center gap-5">
        <div>
          <h5 className="text-fill-transparent text-stroke-white text-stroke-1 font-extrabold">
            selected work
          </h5>
        </div>
        <SliderStrip Slider={Slider} nav2={nav2} slider1={slider1} />
      </article>
      <article className="w-full flex flex-col items-center">
        <SliderNav Slider={Slider} nav1={nav1} slider2={slider2} />
      </article>
    </section>
  )
}

export default Work
