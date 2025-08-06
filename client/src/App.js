import Header from "./components/Header";
import Footer from "./components/Footer";
import UrlShortenerForm from "./components/UrlShortenerForm";
import { useAuth } from "./contexts/AuthContext";
import "./styles.css";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main>
        {user ? (
          <UrlShortenerForm />
        ) : (
          <div className="landing">
            <h1>🚀 Shorten URLs Effortlessly</h1>
            <p>Sign in using the button above to get started with link shortening and QR code generation.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;