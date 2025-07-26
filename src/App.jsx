import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Brands from './pages/Brands'
import BusinessEnquiry from './pages/BusinessEnquiry'
import Career from './pages/Career'
import Dine from './pages/Dine'
import Entertainment from './pages/Entertainment'
import Events from './pages/Events'
import FloorPlan from './pages/FloorPlan'
import Gallery from './pages/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import PrivatePage from './pages/PrivatePage'
import BusinessEnquiryLeasing from './pages/BusinessEnquiryLeasing'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className=' w-full  '>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/entertainments" element={<Entertainment />} />
        <Route path="/dine" element={<Dine />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/floor-plan" element={<FloorPlan />} />
        <Route path="/business-enquiry/advertising" element={<BusinessEnquiry />} />
        <Route path="/business-enquiry/leasing" element={<BusinessEnquiryLeasing />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy/:type" element={<PrivatePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
