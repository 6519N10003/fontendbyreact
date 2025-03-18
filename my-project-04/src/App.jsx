import { BrowserRouter, Route ,Routes } from "react-router-dom"
import LoginPage from "./views/LoginPage"
import HomePage from "./views/HomePage"
import AboutPage from "./views/AboutPage"
import ContactPage from "./views/ContactPage"
import ShowIoTPage from "./views/ShowIoTPage"
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ieie" element={<ShowIoTPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
