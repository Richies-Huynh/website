"use client";

import Image from "next/image";
import axios from "axios";
import "./styles.css"
import { useState } from "react";
import Header from "./components/ui/Header";
import Faq from "./components/ui/FAQ/faq";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("/sample", {
        key: "value",
      });
      setData(response.data);
      console.log("Data: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-title">
            <div className="rebelhacks">
              <h1 className="rebel">REBEL</h1>
              <h1 className="hacks">HACKS</h1>
              <h2 className="unlv">UNLV 2026</h2>
            </div>

            <p className="hero-description">
              Come together to design, develop, and present projects that tackle
              real-world problems!
            </p>

            <p className="hero-date">FRI & SAT February 20–21, 2026</p>
          </div>

          <div className="hero-image-wrapper">
            <Image
              src="/images/vegas-sign.svg"
              alt="Las Vegas neon sign"
              width={580}
              height={100}
              className="hero-image"
            />
          </div>
        </section>

        {/* <section className="faq">
        <Faq />
      </section> */}
      </main>
    </>
  );
}
