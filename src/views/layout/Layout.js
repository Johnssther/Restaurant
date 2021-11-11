import React from 'react';
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="App">
        <Header balance={10000}/>
        <main className="container">
            {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout;