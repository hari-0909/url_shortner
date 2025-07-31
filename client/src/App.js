import UrlShortenerForm from "./components/UrlShortenerForm"
import "./styles.css"

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Shortly</div>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>
      <main>
        <UrlShortenerForm />
      </main>
      <footer className="footer">© 2025 Hari Babuji. All rights reserved.</footer>
    </>
  )
}

export default App