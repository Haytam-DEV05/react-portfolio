import React from "react";
import Header from "./Components/Templates/Header/Header";
import Footer from "./Components/Templates/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1500,
        }}
      />
      <Header />
      <Footer />
    </>
  );
}
