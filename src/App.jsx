import WeddingLandingPage from "./assets/Pages/WeddingLandingPage/WeddingLandingPage"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <ToastContainer/>
      <Route path="/" element={<WeddingLandingPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
