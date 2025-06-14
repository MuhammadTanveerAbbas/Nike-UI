import React from "react";
import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <>
      {/* Accessibility skip link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-700 text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div className="bg-[#111827] text-white min-h-screen w-full">
        <main role="main" className="font-palanquin">
          <Nav />

          {/* Hero Section */}
          <section
            id="home"
            className="pb-10 px-4 sm:px-6 lg:px-8"
            aria-label="Hero"
          >
            <Hero />
          </section>

          {/* Popular Products */}
          <section
            id="products"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="Popular products"
          >
            <div className="max-w-screen-xl mx-auto">
              <PopularProducts />
            </div>
          </section>

          {/* Super Quality */}
          <section
            id="about-us"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="About our quality"
          >
            <div className="max-w-screen-xl mx-auto">
              <SuperQuality />
            </div>
          </section>

          {/* Services */}
          <section
            id="services"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="Our services"
          >
            <div className="max-w-screen-xl mx-auto">
              <Services />
            </div>
          </section>

          {/* Special Offer */}
          <section
            id="special-offer"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="Special offer"
          >
            <div className="max-w-screen-xl mx-auto">
              <SpecialOffer />
            </div>
          </section>

          {/* Customer Reviews */}
          <section
            id="reviews"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="Customer reviews"
          >
            <div className="max-w-screen-xl mx-auto">
              <CustomerReviews />
            </div>
          </section>

          {/* Subscribe */}
          <section
            id="contact-us"
            className="py-8 px-4 sm:px-6 lg:px-8"
            aria-label="Subscribe"
          >
            <div className="max-w-screen-xl mx-auto">
              <Subscribe />
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
