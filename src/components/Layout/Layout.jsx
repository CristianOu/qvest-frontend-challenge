import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({children, ...tasks}) {
  return (
    <div>
      <Header />
        { children }
      <Footer tasks={tasks}/>
    </div>
  );
}

export default Layout;
