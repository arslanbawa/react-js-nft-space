import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import UsersState from "../../components/UsersState";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <UsersState />
      <Footer />
    </div>
  );
}

export default LandingPage;
