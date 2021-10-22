function CustomSlide({children}) {
  return (
    <div className="is-current border-b border-solid border-white opacity-30 leading-snug hover:border-orange hover:border-opacity-100">
      <a href="#work" className="flex flex-col">
        {children}
      </a>
    </div>
  )
}

function SliderNav({Slider, nav1, slider2}) {
  return (
    <div className="w-full mt-16">
      <Slider
        asNavFor={nav1}
        ref={slider2}
        lazyLoad
        arrows={false}
        slidesToShow={4}
        vertical
        className="border-t-4 border-solid border-white text-white text-lg font-medium"
      >
        <CustomSlide>
          01
          <br />
          web_shapers studio
        </CustomSlide>
        <CustomSlide>
          02
          <br />
          web_shapers studio
        </CustomSlide>
        <CustomSlide>
          03
          <br />
          web_shapers studio
        </CustomSlide>
        <CustomSlide>
          04
          <br />
          web_shapers studio
        </CustomSlide>
      </Slider>
    </div>
  )
}

export default SliderNav
