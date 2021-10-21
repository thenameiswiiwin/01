import artboard from '@/images/Artboard.jpg'

function SliderStrip({Slider, nav2, slider1}) {
  return (
    <div className="w-9/10">
      <Slider
        dots
        pauseOnDotsHover
        arrows={false}
        slickPlay
        asNavFor={nav2}
        ref={slider1}
        className="h-35"
      >
        <div>
          <img src={artboard} alt="" />
        </div>
        <div>
          <img src={artboard} alt="" />
        </div>
        <div>
          <img src={artboard} alt="" />
        </div>
        <div>
          <img src={artboard} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderStrip
