// import React from "react";
import './_page_body.scss';
import './_page-body__container.scss';
import './_main-container.scss';
import './_aside-container.scss';
import Header from '../components/Header/Header';
import IndexMain from '../components/IndexMain/IndexMain';
import Footer from '../components/Footer/Footer';

function PageIndex() {
  return (
    <div className="page-body">
      <div className="page-body__container">
      <div id="top"></div>
        <Header />
        <main>
          <IndexMain />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PageIndex;
