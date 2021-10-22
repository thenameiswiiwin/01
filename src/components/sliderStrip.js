import artboard from '@/images/Artboard.jpg'

function SliderStrip({Slider, nav2, slider1}) {
  return (
    <div className="w-full">
      <Slider
        dots
        pauseOnDotsHover
        arrows={false}
        lazyLoad
        asNavFor={nav2}
        ref={slider1}
        autoplay
        autoplaySpeed={3000}
        pauseOnHover
        className="h-35"
      >
        <div>
          <img src={artboard} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={artboard} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={artboard} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={artboard} alt="" className="w-full h-full" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderStrip
