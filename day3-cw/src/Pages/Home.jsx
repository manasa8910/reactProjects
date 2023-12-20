import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Card></Card>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
}

export default Home;
