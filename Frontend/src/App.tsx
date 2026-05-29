import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
