import React, { useState } from 'react';
import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import NavbarPart from './Components/NavbarPart/NavbarPart';
import WelcomePage from './Components/WelcomePage/WelcomePage';

function App() {
  // Başlangıçta varsayılan olarak 'welcomePage' görünecek
  const [currentPage, setCurrentPage] = useState<'loginRegister' | 'welcomePage'>('welcomePage');

  const handleButtonClick = () => {
    setCurrentPage('loginRegister'); // LoginRegister sayfasını göster
  };

  const handlePClick = () => {
    setCurrentPage('welcomePage'); // WelcomePage sayfasını göster
  };

  return (
    <div className="App">
      <NavbarPart onButtonClick={handleButtonClick} onPClick={handlePClick} />
      {currentPage === 'loginRegister' && <LoginRegister />}
      {currentPage === 'welcomePage' && <WelcomePage />}
    </div>
  );
}

export default App;
