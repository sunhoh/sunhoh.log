import React from "react";
import { useRouter } from "next/router";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default React.memo(Layout);
