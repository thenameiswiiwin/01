import Header from '@sections/header'
import Footer from '@components/footer'

function Layout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
