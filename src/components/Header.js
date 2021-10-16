import Logo from '@sections/header/Logo'
import Colophon from '@sections/header/Colophon'
import Nav from '@components/Nav'

function Header() {
  return (
    <header className="fixed h-10 z-10 pt-5 pb-0 px-7/100 top-0 right-0 left-0">
      <div className="flex items-center border-primary">
        <Logo />
        <Colophon />
        <Nav />
      </div>
    </header>
  )
}

export default Header
