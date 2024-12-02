import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Trade } from './pages/Trade';
import { TraderProfile } from './pages/TraderProfile';
import { SwapTraderProfile } from './pages/SwapTraderProfile';
import { Wallet } from './pages/Wallet';
import { CreateOffer } from './pages/CreateOffer';
import { Settings } from './pages/Settings';
import { About } from './pages/About';
import { Terms } from './pages/Terms';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Guides } from './pages/Guides';
import { Fees } from './pages/Fees';
import { Reputation } from './pages/Reputation';
import { ScrollToTop } from './components/ScrollToTop';
import { ReputationNotification } from './components/ReputationNotification';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trade/:username" element={<Trade />} />
          <Route path="/trader/:username" element={<TraderProfile />} />
          <Route path="/swap-trader/:username" element={<SwapTraderProfile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/reputation" element={<Reputation />} />
        </Routes>
        <Footer />
        <ReputationNotification />
      </div>
    </Router>
  );
}