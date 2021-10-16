import FooterHeader from '@sections/footer/FooterHeader'
import Links from '@sections/footer/Links'
import Signature from '@sections/footer/Signature'

function Footer() {
  return (
    <footer className="h-screen relative pt-7/100 pb-1/100 px-7/100">
      <FooterHeader />
      <div className="flex flex-col absolute right-0 left-0 bottom-0 px-7/100">
        <Links />
        <Signature />
      </div>
    </footer>
  )
}

export default Footer
