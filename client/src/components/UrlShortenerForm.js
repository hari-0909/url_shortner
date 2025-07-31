import { useState } from "react"
import axios from "axios"

export default function UrlShortenerForm() {
  const [inputUrl, setInputUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputUrl.trim()) return setError("Please enter a URL")
    try {
      setError("")
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/shorten`, { url: inputUrl })
      setShortUrl(res.data.shortUrl)
    } catch (err) {
      setShortUrl("")
      setError(err.response?.data?.error || "Something went wrong")
    }
  }

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Shorten</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortUrl && (
        <p style={{ marginTop: "10px" }}>
          Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  )
}