import Header from "./components/Header"
import Footer from "./components/Footer"
import UrlShortenerForm from "./components/UrlShortenerForm"
import "./styles.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <UrlShortenerForm />
      </main>
      <Footer />
    </>
  )
}

export default App