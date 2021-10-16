import {ReactComponent as LogoLight} from '@/svgs/logo-light.svg'
import Nav from '@/components/Nav'

function Header() {
  return (
    <header className="fixed h-10 z-10 pt-5 pb-0 px-7/100 top-0 right-0 left-0">
      <div className="flex items-center border-primary">
        <section className="w-3/12">
          <LogoLight width="60" height="53" />
        </section>
        <section className="hidden">
          <span>huy nguyen</span>
          <span>Intro</span>
        </section>
        <Nav />
      </div>
    </header>
  )
}

export default Header
