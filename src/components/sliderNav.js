function SliderNav({Slider, nav1, slider2}) {
  return (
    <div className="w-9/10">
      <Slider
        asNavFor={nav1}
        ref={slider2}
        arrows={false}
        slidesToShow={4}
        swipeToSlide
        focusOnSelect
        infinite={false}
        vertical
        className="border-t-4 border-solid border-white text-white text-lg"
      >
        <div className="border-b border-solid border-white w-full">
          <a href="#work">
            01
            <br />
            web_shapers studio
          </a>
        </div>
        <div className="border-b border-solid border-white w-full">
          <a href="#work">
            01
            <br />
            web_shapers studio
          </a>
        </div>
        <div className="border-b border-solid border-white w-full">
          <a href="#work">
            01
            <br />
            web_shapers studio
          </a>
        </div>
        <div className="border-b border-solid border-white w-full">
          <a href="#work">
            01
            <br />
            web_shapers studio
          </a>
        </div>
      </Slider>
    </div>
  )
}

export default SliderNav
