import Header from "@/components/Header";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";

import Hero from "./sections/Hero";
import GetStarted from "./sections/GetStarted";

export default function Home(){
  return(
    <main>
      <Header />
      <Hero />
      <Divider />
      <GetStarted />
      <Footer />
    </main>
  );
}