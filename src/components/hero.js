import {ReactComponent as ArrowDown} from '@/svgs/arrow-down.svg'

function Hero() {
  return (
    <section className="h-screen py-7/100 px-7/100 flex flex-col justify-between text-xl font-semibold">
      <article className="topPos flex flex-col gap-9 leading-7">
        <div className="w-1/2 mt-1/20">
          <p className="text-orange capitalize">I break things</p>
          <p className="text-lg font-medium">
            To learn the in and out of how things work.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-orange capitalize">I make things</p>
          <p className="text-lg font-medium">
            Once I have a better understanding of how things work.
          </p>
        </div>
      </article>
      <article className="bottom-1/20 inset-x-7/100 text-18 uppercase leading-none">
        <h6 className="text-14">Front-end</h6>
        <h6 className="flex justify-between items-center">
          <span>
            <a href="#work">
              <ArrowDown width="45px" height="45px" />
            </a>
          </span>
          <span>Dev</span>
        </h6>
      </article>
    </section>
  )
}

export default Hero
