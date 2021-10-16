import Links from '@/components/Links'

function Footer() {
  return (
    <footer className="h-screen relative pt-7/100 pb-1/100 px-7/100">
      <h4 className="relative top-2/25 max-h-9/10 mt-1/20 mb-0 mr-5 text-15 font-semibold leading-none uppercase">
        <span className="inline-block relative overflow-hidden">
          Let&apos;s
        </span>
        <span className="inline-block relative overflow-hidden float-right">
          Work
        </span>
        <span className="inline-block relative overflow-hidden float-right">
          Together!
        </span>
      </h4>
      <div className="flex flex-col absolute right-0 left-0 bottom-0 px-7/100">
        <Links />
        <section className="relative w-full">
          <div className="w-full text-8 font-bold">
            <h5 className="pt-2.5 pb-0 text-right mb-0 mt-1.5 mr-5 border-secondary">
              © 2021 Huy Nguyen
            </h5>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
