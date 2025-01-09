import WeddingLandingPage from "./assets/Pages/WeddingLandingPage/WeddingLandingPage"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" />
      <WeddingLandingPage/>
    </div>
  )
}

export default App
