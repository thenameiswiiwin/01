import Header from '@components/sections/header'
import Footer from '@components/footer'

function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Footer />
      </main>
    </div>
  )
}

export default Layout
