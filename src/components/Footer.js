import Title from '@sections/footer/title'
import Links from '@sections/footer/links'
import Signature from '@sections/footer/signature'

function Footer() {
  return (
    <footer className="h-screen pt-7/100 pb-1/100 px-7/100 flex flex-col justify-between">
      <Title />
      <div>
        <Links />
        <Signature />
      </div>
    </footer>
  )
}

export default Footer
