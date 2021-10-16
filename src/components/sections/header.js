import Logo from '@sections/header/logo'
import Colophon from '@sections/header/colophon'
import Nav from '@components/nav'

function Header() {
  return (
    <header className="fixed h-10 w-full pt-5 pb-0 px-7/100 z-20">
      <div className="flex items-center border-primary">
        <Logo />
        <Colophon />
        <Nav />
      </div>
    </header>
  )
}

export default Header
