import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import "../header/header.css"

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout;