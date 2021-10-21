import {ReactComponent as LogoLight} from '@/svgs/logo-light.svg'

function Logo() {
  return (
    <section className="w-1/4">
      <a href="index.html">
        <LogoLight width="70" height="63" />
      </a>
    </section>
  )
}

export default Logo
