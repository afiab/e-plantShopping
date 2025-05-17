
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {

  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  useEffect(() => {
    document.title = "Welcome to Paradise Nursery";
    return () => {
      document.title = "Plant Shopping";
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>

              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>

        </div>
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;



