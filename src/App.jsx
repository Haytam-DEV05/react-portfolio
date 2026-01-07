import React, { useState } from "react";
import Header from "./Components/Templates/Header/Header";
import Footer from "./Components/Templates/Footer/Footer";
import Loader from "./Components/Templates/Loader/Loader";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <div>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 1500,
            }}
          />
          <Header />
          <Footer />
        </div>
      )}
    </>
  );
}
