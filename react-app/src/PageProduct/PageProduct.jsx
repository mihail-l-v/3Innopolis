// import React from "react";
import './_page_body.scss';
import './_page-body__container.scss';
import './_main-container.scss';
import './_aside-container.scss';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import ProductTitle from '../components/ProductTitle/ProductTitle';
import Appearance from '../components/Appearance/Appearance';
import Product from '../components/Product/Product';
import PriceMenu from '../components/PriceMenu/PriceMenu';
import Advertisements from '../components/Advertisements/Advertisements';
import Reviews from '../components/Reviews/Reviews';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import Footer from '../components/Footer/Footer';

function PageProduct() {
  return (
    <div className="page-body">
      <div className="page-body__container">
      <div id="top"></div>
        <Header />
        <Navigation />
        <ProductTitle />
        <main>
          <Appearance />
          <div className="main-container">
            <Product />
            <div className="aside-container">
              <PriceMenu />
              <Advertisements />
            </div>
          </div>
          <Reviews />
          <ReviewForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PageProduct;
