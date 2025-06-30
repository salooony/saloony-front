import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About";
import Services from "@/app/_components/Services";
import FAQ from "@/app/_components/FAQ";
import Footer from "@/src/components/layout/Footer";


export default function HomePage() {
  return (
    <>
      <Hero />
        <About/>
        <Services/>
        <FAQ/>
      <Footer/>
     </> 
  );
}