import Logo from '@sections/header/logo'
import Colophon from '@sections/header/colophon'
import Nav from '@components/nav'

function Header() {
  return (
    <header className="fixed w-full px-7/100 z-50 bg-primary">
      <div className="flex gap-6 items-center border-primary">
        <Logo />
        <Colophon />
        <Nav />
      </div>
    </header>
  )
}

export default Header
