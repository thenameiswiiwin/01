import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Layout() {
  return (
    <div className="flex flex-col bg-primary text-primary">
      <Header />
      <main>
        {/* Children Props */}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
